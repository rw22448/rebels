import React, { useEffect, useState } from 'react';
import { UseQueryResult } from 'react-query';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';
import { MatchDTO } from '../MatchDTO';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import { ProfileModuleContent } from '../ProfileModule/ProfileModule.styles';

interface LatestStatsModuleProps {
  matchHistoryIsError: boolean;
  matchHistoryIsLoading: boolean;
  matchHistoryIsSuccess: boolean;
  matchHistoryRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<UseQueryResult>;
  data: MatchDTO[];
  puuid: string | undefined;
}

const calculateAverageRank = (array: number[]): number => {
  if (array.length === 0) {
    return 4.5;
  }

  let rankTotal = 0;

  for (let i = 0; i < array.length; i++) {
    rankTotal += array[i];
  }

  return rankTotal / array.length;
};

const LatestStatsModule = ({
  matchHistoryIsError,
  matchHistoryIsLoading,
  matchHistoryIsSuccess,
  matchHistoryRefetch,
  data,
  puuid,
}: LatestStatsModuleProps) => {
  const [averageRank, setAverageRank] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let resultArray: number[] = [];

      const participantsArray = data.map((match) => match.info.participants);

      participantsArray.forEach((participantList) => {
        participantList.forEach((participant) => {
          if (participant.puuid === puuid) {
            resultArray.push(participant.placement);
          }
        });
      });

      setAverageRank(calculateAverageRank(resultArray));
    }
  }, [data, puuid]);

  return (
    <>
      <ProfileModule heading="Latest stats">
        <ErrorLoadingModule
          isError={matchHistoryIsError}
          isLoading={matchHistoryIsLoading}
          refetch={matchHistoryRefetch}
        />

        {matchHistoryIsSuccess && (
          <ProfileModuleContent>
            <div>
              <div>{averageRank}</div>
              <div>Average rank</div>
            </div>
          </ProfileModuleContent>
        )}
      </ProfileModule>
    </>
  );
};

export { LatestStatsModule };
