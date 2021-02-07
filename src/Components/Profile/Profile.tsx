import React, { useState } from 'react';
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
import { ProfileModule } from './ProfileModule/ProfileModule';

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

export const Profile = () => {
  const { region, summonerName } = useParams<ProfileParams>();
  const [summonerData, setSummonerData] = useState<SummonerDTO>();

  const { data, isError, isLoading, isSuccess } = useQuery(
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

  return (
    <>
      <Flex>
        <Nav />

        {isError && (
          <ProfileErrorContainer>
            <Error />
          </ProfileErrorContainer>
        )}

        {isLoading && (
          <ProfileLoadingContainer>
            <Loading />
          </ProfileLoadingContainer>
        )}

        {isSuccess && (
          <ProfileContainer>
            <ProfileContent>
              <ProfileBanner />
              <AccountInfo
                name={summonerData?.name}
                // Passing data from useQuery instead of summonerData from
                // state to avoid failing to load from initial undefined
                // state, instead allowing it to work first time
                profileIconId={data?.profileIconId}
                summonerLevel={summonerData?.summonerLevel}
                region={region}
              />
              <MainContent>
                <ProfileSideGrid>
                  <RankBannerModule
                    region={region}
                    summonerId={summonerData?.id}
                  />
                  <ProfileModule heading="Latest stats">
                    <div>Latest stats</div>
                  </ProfileModule>
                </ProfileSideGrid>

                <ProfileModule heading="Match history">
                  <div>Match history</div>
                </ProfileModule>
              </MainContent>
            </ProfileContent>
          </ProfileContainer>
        )}
      </Flex>
    </>
  );
};
