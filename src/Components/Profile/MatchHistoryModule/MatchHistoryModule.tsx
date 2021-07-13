import React from 'react';
import { UseQueryResult } from 'react-query';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';
import { Warning } from '../LatestStatsModule/LatestStatsModule.styles';
import { MatchDTO, UnitsDTO } from '../MatchDTO';
import { ProfileModuleContent } from '../ProfileModule/ProfileModule.styles';
import { MatchContent, MatchHistoryGrid } from './MatchHistoryModule.styles';
import { MatchBasicInfo } from './MatchBasicInfo/MatchBasicInfo';
import { VerticalRule } from '../../Styles/Common/VerticalRule/VerticalRule';
import { MatchChampions } from './MatchChampions/MatchChampions';

interface MatchHistoryModuleProps {
  matchesIsError: boolean;
  matchesIsLoading: boolean;
  matchesIsSuccess: boolean;
  matchesRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<UseQueryResult>;
  data: MatchDTO[];
  puuid: string | undefined;
}

const calculatePlacementForMatch = (
  match: MatchDTO,
  puuid: string | undefined
): number => {
  const participantsArray = match.info.participants;
  let output = 0;

  participantsArray.forEach((participant) => {
    if (participant.puuid === puuid) {
      output = participant.placement;
    }
  });

  return output;
};

const returnChampionListForPuuid = (
  match: MatchDTO,
  puuid: string | undefined
): UnitsDTO[] => {
  let output: UnitsDTO[] = [];

  match.info.participants.forEach((participant) => {
    if (participant.puuid === puuid) {
      output = participant.units;
    }
  });

  return output;
};

const MatchHistoryModule = ({
  matchesIsError,
  matchesIsLoading,
  matchesIsSuccess,
  matchesRefetch,
  data,
  puuid,
}: MatchHistoryModuleProps) => {
  return (
    <>
      <ProfileModule heading="Match history">
        <ErrorLoadingModule
          isError={matchesIsError}
          isLoading={matchesIsLoading}
          refetch={matchesRefetch}
        />

        {matchesIsSuccess && (
          <>
            {data.length >= 1 && (
              <MatchHistoryGrid>
                {data.map((match, index) => (
                  <ProfileModuleContent key={index}>
                    <MatchContent>
                      <MatchBasicInfo
                        placement={calculatePlacementForMatch(match, puuid)}
                        gameType={
                          match.info.queue_id === 1100 ? 'Ranked' : 'Normal'
                        }
                        gameLength={match.info.game_length}
                        datePlayed={match.info.game_datetime}
                      />
                      <VerticalRule
                        height="full"
                        padding={24}
                        ruleColour="#C4C4C4"
                      />
                      <MatchChampions
                        championList={returnChampionListForPuuid(match, puuid)}
                      />
                      <VerticalRule
                        height="full"
                        padding={24}
                        ruleColour="#C4C4C4"
                      />
                    </MatchContent>
                  </ProfileModuleContent>
                ))}
              </MatchHistoryGrid>
            )}

            {data.length < 1 && (
              <ProfileModuleContent>
                <Warning>No recent matches to display.</Warning>
              </ProfileModuleContent>
            )}
          </>
        )}
      </ProfileModule>
    </>
  );
};

export { MatchHistoryModule };
