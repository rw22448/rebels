import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ProfileModule } from '../ProfileModule/ProfileModule';
import {
  RankBannerModuleContent,
  RankBorder,
  RankInfoContainer,
  SetName,
} from './RankBannerModule.styles';

const SET_NAME = 'Set 4 | Fates';

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
  tier:
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
    () => {
      return fetchRankDetailsBySummonerId(region, summonerId);
    },
    {
      onSuccess: (data) => {
        setRankData(data);
      },
    }
  );

  let rankTier = rankData?.tier || 'UNRANKED';

  return (
    <>
      {isSuccess && (
        <ProfileModule heading="Season rank">
          <RankBannerModuleContent tier={rankTier}>
            <SetName tier={rankTier}>{SET_NAME}</SetName>

            <RankInfoContainer>
              <RankBorder tier={rankTier}></RankBorder>
            </RankInfoContainer>

            {JSON.stringify(rankData)}
          </RankBannerModuleContent>
        </ProfileModule>
      )}
    </>
  );
};

export { RankBannerModule };
