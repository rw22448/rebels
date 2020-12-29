import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Nav } from '../Navigation/Nav/Nav';
import { Loading } from '../Styles/Common/Loading/Loading';
import { Error } from '../Styles/Common/Error/Error';
import { Flex } from '../Styles/CommonStyles';
import {
  ProfileContainer,
  ProfileContent,
  ProfileErrorContainer,
  ProfileLoadingContainer,
  ProfileSideGrid,
} from './Profile.styles';
import { AccountInfo } from './ProfileHeader/AccountInfo/AccountInfo';
import { ProfileBanner } from './ProfileHeader/ProfileBanner/ProfileBanner';
import { RankBannerModule } from './RankBannerModule/RankBannerModule';

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
        console.log(error.response);
      }

      throw error;
    });
};

export const Profile = () => {
  const { region, summonerName } = useParams<ProfileParams>();
  const [summonerData, setSummonerData] = useState<SummonerDTO>();

  const { data, isLoading, isError, isSuccess } = useQuery(
    'fetchProfileDataByName',
    () => {
      return fetchProfileDataByName(region, summonerName);
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
                // Passing data instead of summonerData to avoid failing to load into state refresh, instead allowing it to work first time
                profileIconId={data?.profileIconId}
                summonerLevel={summonerData?.summonerLevel}
                region={region}
              />
              <div className="mainContent">
                <ProfileSideGrid className="leftSideGrid">
                  <RankBannerModule />
                  <div className="latestStats">Latest stats</div>
                </ProfileSideGrid>
                <div
                  style={{ display: 'inline-block' }}
                  className="matchHistory"
                >
                  Match history
                </div>
              </div>
            </ProfileContent>
          </ProfileContainer>
        )}
      </Flex>
    </>
  );
};
