import React, { useEffect, useState } from 'react';
import { UseQueryResult } from 'react-query';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';
import { MatchDTO } from '../MatchDTO';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import { ProfileModuleContent } from '../ProfileModule/ProfileModule.styles';
import {
  AverageRank,
  AverageRankContainer,
  AverageRankNumberContainer,
  AverageRankText,
  SubText,
} from './LatestStatsModule.styles';

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

const calculateAverageRank = (array: number[]): number | undefined => {
  if (array.length === 0) {
    return undefined;
  }

  let rankTotal = 0;

  for (let i = 0; i < array.length; i++) {
    rankTotal += array[i];
  }

  return Number((rankTotal / array.length).toFixed(1));
};

const LatestStatsModule = ({
  matchHistoryIsError,
  matchHistoryIsLoading,
  matchHistoryIsSuccess,
  matchHistoryRefetch,
  data,
  puuid,
}: LatestStatsModuleProps) => {
  const [averageRank, setAverageRank] = useState<number>();
  const [totalGames, setTotalGames] = useState<number>(0);

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
      setTotalGames(resultArray.length);
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
            {!!averageRank && (
              <AverageRankContainer>
                <AverageRankNumberContainer>
                  <AverageRank>{averageRank}</AverageRank>
                </AverageRankNumberContainer>
                <AverageRankText>
                  <div>Average rank</div>
                  <SubText>Over last {totalGames} games</SubText>
                </AverageRankText>
              </AverageRankContainer>
            )}
          </ProfileModuleContent>
        )}
      </ProfileModule>
    </>
  );
};

export { LatestStatsModule };
