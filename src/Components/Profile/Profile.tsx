import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Nav } from '../Navigation/Nav/Nav';
import { Loading } from '../Styles/Common/Loading/Loading';
import { Error } from '../Styles/Common/Error/Error';
import { Flex } from '../Styles/CommonStyles';
import {
  MainContent,
  ProfileContainer,
  ProfileContent,
  ProfileErrorContainer,
  ProfileLoadingContainer,
  ProfileSideGrid,
} from './Profile.styles';
import { AccountInfo } from './ProfileHeader/AccountInfo/AccountInfo';
import { ProfileBanner } from './ProfileHeader/ProfileBanner/ProfileBanner';
import { RankBannerModule } from './RankBannerModule/RankBannerModule';
import { MatchHistoryModule } from './MatchHistoryModule/MatchHistoryModule';
import { LatestStatsModule } from './LatestStatsModule/LatestStatsModule';
import { MatchDTO } from './MatchDTO';
import { HorizontalRule } from '../Styles/Common/HorizontalRule/HorizontalRule';

interface ProfileParams {
  region: string;
  summonerName: string;
}

interface SummonerDTO {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

interface CustomMatchDTO {
  latestMatchDateTime: string;
  matchIds: string[];
  results: MatchDTO[];
}

const resolveRegionalRoute = (region: string): string => {
  switch (region) {
    case 'eun1':
    case 'euw1':
    case 'tr1':
    case 'ru':
      return 'europe';
    case 'jp1':
    case 'kr':
      return 'asia';
    case 'oc1':
    case 'na1':
    case 'la1':
    case 'la2':
    case 'br1':
      return 'americas';
    default:
      return 'americas';
  }
};

const fetchProfileDataByName = async (
  region: string,
  summonerName: string
): Promise<SummonerDTO> => {
  return await axios
    .get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/${region}/get-summoner/by-name/${summonerName}`
    )
    .then((result) => result.data as SummonerDTO)
    .catch((error) => {
      if (error.response) {
        console.error(error.response);
      }

      throw error;
    });
};

const fetchMatchHistoryByMatchHistoryIds = async (
  regionalRoute: string | undefined,
  puuid: string | undefined
): Promise<CustomMatchDTO> => {
  return await axios
    .get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/${regionalRoute}/get-latest-match-details/by-puuid/${puuid}`,
      {
        params: {
          count: process.env.REACT_APP_PROFILE_MAX_MATCH_HISTORY_COUNT || 20,
        },
      }
    )
    .then((result) => result.data as CustomMatchDTO)
    .catch((error) => {
      if (error.response) {
        console.error(error.response);
      }

      throw error;
    });
};

export const Profile = () => {
  const { region, summonerName } = useParams<ProfileParams>();
  const [summonerData, setSummonerData] = useState<SummonerDTO>();
  const [regionalRoute, setRegionalRoute] = useState<string>();
  const [latestMatchDateTime, setLatestMatchDateTime] = useState<string>();
  const [allMatchData, setAllMatchData] = useState<MatchDTO[]>([]);

  const {
    data: profileData,
    isError: profileIsError,
    isLoading: profileIsLoading,
    isSuccess: profileIsSuccess,
  } = useQuery(
    'fetchProfileDataByName',
    async () => {
      return await fetchProfileDataByName(region, summonerName);
    },
    {
      onSuccess: (data) => {
        setSummonerData(data);
      },
    }
  );

  const {
    isError: matchHistoryIsError,
    isLoading: matchHistoryIsLoading,
    isSuccess: matchHistoryIsSuccess,
    refetch: matchHistoryRefetch,
  } = useQuery(
    'fetchMatchHistoryByMatchHistoryIds',
    async () => {
      return await fetchMatchHistoryByMatchHistoryIds(
        regionalRoute,
        summonerData?.puuid
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);

        let filteredResults: MatchDTO[] = [];

        filteredResults = data.results.filter((match) => {
          if (
            `${match.info.tft_set_number}` ===
            process.env.REACT_APP_TFT_SET_NUMBER
          ) {
            return true;
          }
          return false;
        });

        setAllMatchData(filteredResults);
        setLatestMatchDateTime(data.latestMatchDateTime);
      },
      enabled: !!(regionalRoute && summonerData?.puuid),
    }
  );

  useEffect(() => {
    setRegionalRoute(resolveRegionalRoute(region));
  }, [region]);

  useEffect(() => {
    document.title = `Rebels | ${summonerName}`;
  });

  return (
    <>
      <Flex>
        <Nav />

        {profileIsError && (
          <ProfileErrorContainer>
            <Error />
          </ProfileErrorContainer>
        )}

        {profileIsLoading && (
          <ProfileLoadingContainer>
            <Loading />
          </ProfileLoadingContainer>
        )}

        {profileIsSuccess && (
          <ProfileContainer>
            <ProfileContent>
              <ProfileBanner />
              <AccountInfo
                name={summonerData?.name}
                // Passing data from useQuery instead of summonerData from
                // state to avoid failing to load from initial undefined
                // state, instead allowing it to work first time
                profileIconId={profileData?.profileIconId}
                summonerLevel={summonerData?.summonerLevel}
                region={region}
                latestMatchDateTime={latestMatchDateTime}
              />
              <MainContent>
                <ProfileSideGrid>
                  <RankBannerModule
                    region={region}
                    summonerId={summonerData?.id}
                  />
                  <LatestStatsModule
                    matchHistoryIsError={matchHistoryIsError}
                    matchHistoryIsLoading={matchHistoryIsLoading}
                    matchHistoryIsSuccess={matchHistoryIsSuccess}
                    matchHistoryRefetch={matchHistoryRefetch}
                    data={allMatchData}
                    puuid={summonerData?.puuid}
                  />
                </ProfileSideGrid>

                <MatchHistoryModule
                  matchesIsError={matchHistoryIsError}
                  matchesIsLoading={matchHistoryIsLoading}
                  matchesIsSuccess={matchHistoryIsSuccess}
                  matchesRefetch={matchHistoryRefetch}
                  data={allMatchData}
                  puuid={summonerData?.puuid}
                />
              </MainContent>
              <HorizontalRule width="full" padding={48} />
              <div>
                <p>
                  Rebels isn't endorsed by Riot Games and doesn't reflect the
                  views or opinions of Riot Games or anyone officially involved
                  in producing or managing Riot Games properties. Riot Games,
                  and all associated properties are trademarks or registered
                  trademarks of Riot Games, Inc.
                </p>
              </div>
            </ProfileContent>
          </ProfileContainer>
        )}
      </Flex>
    </>
  );
};
