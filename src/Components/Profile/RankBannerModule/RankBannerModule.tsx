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
} from './RankBannerModule.styles';
import { RankIconResolver } from './RankIconResolver/RankIconResolver';
import { HorizontalRule } from '../../Styles/Common/HorizontalRule/HorizontalRule';

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

  const { isSuccess } = useQuery(
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

  let rankTier = rankData?.tier || undefined;

  return (
    <>
      <ProfileModule heading="Season rank">
        {isSuccess && rankTier && (
          <RankBannerModuleContent tier={rankTier}>
            <SetName tier={rankTier}>{SET_NAME}</SetName>

            <RankInfoContainer>
              <RankBorder tier={rankTier}>
                <RankIconResolver tier={rankTier} />
              </RankBorder>
            </RankInfoContainer>

            <PlayerRankData>
              <RankName tier={rankTier}>
                <StyledTierName>{rankData?.tier}</StyledTierName>
                <span>{` ${rankData?.rank}`}</span>
              </RankName>

              <LeaguePoints
                tier={rankTier}
              >{`${rankData?.leaguePoints} LP`}</LeaguePoints>
            </PlayerRankData>

            {!(
              rankData?.tier === undefined || rankData?.tier === 'UNRANKED'
            ) && (
              <DetailedRankInfo tier={rankTier}>
                <HorizontalRule
                  width="full"
                  ruleColour={rankData?.tier === 'GOLD' ? '#FFFFFF' : '#C4C4C4'}
                  padding={24}
                />
                <Wins>
                  Total wins: <Right>{rankData?.wins}</Right>
                </Wins>
                <Losses>
                  Losses: <Right>{rankData?.losses}</Right>
                </Losses>
                <WinRate>
                  Win rate:{' '}
                  <Right>
                    {(
                      (rankData?.wins / (rankData?.wins + rankData?.losses)) *
                      100
                    ).toFixed(1)}
                    %
                  </Right>
                </WinRate>
                <GamesPlayed>
                  Games played:{' '}
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
