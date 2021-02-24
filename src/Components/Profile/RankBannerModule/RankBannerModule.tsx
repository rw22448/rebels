import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import {
  LeaguePoints,
  PlayerRankData,
  RankBannerModuleContent,
  RankBorder,
  RankInfoContainer,
  RankName,
  Right,
  SetName,
  StyledTierName,
  GamesPlayed,
  Losses,
  WinRate,
  Wins,
  DetailedRankInfo,
  HorizontalRuleContainer,
  VerticalRuleContainer,
  IconTierPointsContainer,
} from './RankBannerModule.styles';
import { RankIconResolver } from './RankIconResolver/RankIconResolver';
import { HorizontalRule } from '../../Styles/Common/HorizontalRule/HorizontalRule';
import { VerticalRule } from '../../Styles/Common/VerticalRule/VerticalRule';
import { ErrorLoadingModule } from '../../Styles/Common/ErrorLoadingModule/ErrorLoadingModule';

const SET_NAME = 'Set 4.5 | Festival of Beasts';

type Tier =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER'
  | 'UNRANKED';

interface RankBannerModuleProps {
  region: string;
  summonerId: string | undefined;
}

interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number;
}

interface LeagueEntryDTO {
  leagueId: string;
  summonerId: string;
  summonerName: string;
  queueType: string;
  tier: Tier;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries?: MiniSeriesDTO;
}

const fetchRankDetailsBySummonerId = async (
  region: string,
  summonerId: string | undefined
): Promise<LeagueEntryDTO> => {
  return await axios
    .get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/${region}/get-rank-details/by-summoner-id/${summonerId}`
    )
    .then((result) => result.data as LeagueEntryDTO)
    .catch((error) => {
      if (error.response) {
        console.error(error.response);
      }

      throw error;
    });
};

const RankBannerModule = ({ region, summonerId }: RankBannerModuleProps) => {
  const [rankData, setRankData] = useState<LeagueEntryDTO>();

  const { isError, isLoading, isSuccess, refetch } = useQuery(
    'fetchRankDetailsBySummonerId',
    async () => {
      return await fetchRankDetailsBySummonerId(region, summonerId);
    },
    {
      onSuccess: (data) => {
        setRankData(data);
      },
      enabled: !!summonerId,
    }
  );

  let rankTier = rankData?.tier;

  return (
    <>
      <ProfileModule heading="Season rank">
        <ErrorLoadingModule
          isError={isError}
          isLoading={isLoading}
          refetch={refetch}
        />

        {/* isSuccess is the given pre-condition, however we append rankTier != undefined so we don't load data using undefined in child components */}
        {/* rankData != undefined check is used to ensure wins and losses attributes are numbers and not undefined */}
        {isSuccess && rankData && rankTier && (
          <RankBannerModuleContent tier={rankTier}>
            <div>
              <SetName tier={rankTier}>{SET_NAME}</SetName>

              <IconTierPointsContainer>
                <RankInfoContainer>
                  <RankBorder tier={rankTier}>
                    <RankIconResolver tier={rankTier} />
                  </RankBorder>
                </RankInfoContainer>

                <PlayerRankData>
                  <RankName tier={rankTier}>
                    <StyledTierName>{rankTier}</StyledTierName>
                    <span>{` ${rankData?.rank}`}</span>
                  </RankName>

                  <LeaguePoints
                    tier={rankTier}
                  >{`${rankData?.leaguePoints} LP`}</LeaguePoints>
                </PlayerRankData>
              </IconTierPointsContainer>
            </div>

            <HorizontalRuleContainer>
              <HorizontalRule
                width="full"
                ruleColour={rankTier === 'GOLD' ? '#FFFFFF' : '#C4C4C4'}
                padding={16}
              />
            </HorizontalRuleContainer>

            <VerticalRuleContainer>
              <VerticalRule
                height="full"
                ruleColour={rankTier === 'GOLD' ? '#FFFFFF' : '#C4C4C4'}
                padding={24}
              />
            </VerticalRuleContainer>

            {rankTier === 'UNRANKED' && (
              <DetailedRankInfo tier={rankTier}>
                <div>No data to show</div>
              </DetailedRankInfo>
            )}

            {!(rankTier === 'UNRANKED') && (
              <DetailedRankInfo tier={rankTier}>
                <Wins>
                  Total wins <Right>{rankData?.wins}</Right>
                </Wins>
                <Losses>
                  Losses <Right>{rankData?.losses}</Right>
                </Losses>
                <WinRate>
                  Win rate{' '}
                  <Right>
                    {(
                      (rankData?.wins / (rankData?.wins + rankData?.losses)) *
                      100
                    ).toFixed(1)}
                    %
                  </Right>
                </WinRate>
                <GamesPlayed>
                  Games played{' '}
                  <Right>{rankData?.wins + rankData?.losses}</Right>
                </GamesPlayed>
              </DetailedRankInfo>
            )}
          </RankBannerModuleContent>
        )}
      </ProfileModule>
    </>
  );
};

export { RankBannerModule };
export type { Tier };
