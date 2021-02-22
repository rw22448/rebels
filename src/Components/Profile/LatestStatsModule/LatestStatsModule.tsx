import React, { useEffect, useState } from 'react';
import { UseQueryResult } from 'react-query';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';
import { HorizontalRule } from '../../Styles/Common/HorizontalRule/HorizontalRule';
import { MatchDTO } from '../MatchDTO';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import { ProfileModuleContent } from '../ProfileModule/ProfileModule.styles';
import {
  AverageRank,
  AverageRankContainer,
  AverageRankNumberContainer,
  AverageRankText,
  LatestStatsContainer,
  LatestStatsContent,
  Newest,
  Oldest,
  StatsSummaryContainer,
  SubText,
} from './LatestStatsModule.styles';
import { MatchBadge } from './MatchBadge/MatchBadge';

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

const calculateAverageRank = (array: number[]): string | undefined => {
  if (array.length === 0) {
    return undefined;
  }

  let rankTotal = 0;

  for (let i = 0; i < array.length; i++) {
    rankTotal += array[i];
  }

  return (rankTotal / array.length).toFixed(1);
};

const LatestStatsModule = ({
  matchHistoryIsError,
  matchHistoryIsLoading,
  matchHistoryIsSuccess,
  matchHistoryRefetch,
  data,
  puuid,
}: LatestStatsModuleProps) => {
  const [averageRank, setAverageRank] = useState<string>();
  const [totalGames, setTotalGames] = useState<number>(0);
  const [placementsArray, setPlacementsArray] = useState<number[]>([]);

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
      setPlacementsArray(resultArray);
    }
  }, [data, puuid]);

  return (
    <>
      <ProfileModule heading="Latest stats">
        {!matchHistoryIsError &&
          !matchHistoryIsLoading &&
          !matchHistoryIsSuccess && (
            <ProfileModuleContent></ProfileModuleContent>
          )}

        <ErrorLoadingModule
          isError={matchHistoryIsError}
          isLoading={matchHistoryIsLoading}
          refetch={matchHistoryRefetch}
        />

        {matchHistoryIsSuccess && (
          <ProfileModuleContent>
            {!!averageRank && (
              <LatestStatsContent>
                <AverageRankContainer>
                  <AverageRankNumberContainer averageRank={averageRank}>
                    <AverageRank>{averageRank}</AverageRank>
                  </AverageRankNumberContainer>
                  <AverageRankText>
                    <div>Average rank</div>
                    <SubText>Over last {totalGames} games</SubText>
                  </AverageRankText>
                </AverageRankContainer>
                <LatestStatsContainer>
                  <Newest>Newest</Newest>
                  <StatsSummaryContainer>
                    {placementsArray.map(
                      (placement, index) =>
                        index < 20 && (
                          <MatchBadge key={index} placement={placement} />
                        )
                    )}
                  </StatsSummaryContainer>
                  <Oldest>Oldest</Oldest>
                </LatestStatsContainer>
                <HorizontalRule
                  width={'full'}
                  ruleColour={'#C4C4C4'}
                  padding={24}
                />
                <div>
                  <div>Wins</div>
                  <div>Top placements</div>
                </div>
              </LatestStatsContent>
            )}
          </ProfileModuleContent>
        )}
      </ProfileModule>
    </>
  );
};

export { LatestStatsModule };
