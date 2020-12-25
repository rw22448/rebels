import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';
import { Nav } from '../Navigation/Nav/Nav';
import { Loading } from '../Styles/Common/Loading/Loading';
import { Error } from '../Styles/Common/Error/Error';
import { Flex } from '../Styles/CommonStyles';
import {
  ProfileContainer,
  ProfileContent,
  ProfileErrorContainer,
  ProfileLoadingContainer,
} from './Profile.styles';
import { AccountInfo } from './ProfileHeader/AccountInfo/AccountInfo';
import { ProfileBanner } from './ProfileHeader/ProfileBanner/ProfileBanner';

interface ProfileProps
  extends RouteComponentProps<{ region: string; summonerName: string }> {}

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

export const Profile = ({ match }: ProfileProps) => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
  } = useQuery('fetchProfileDataByName', () =>
    fetchProfileDataByName(match.params.region, match.params.summonerName)
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
                name={data?.name}
                profileIconId={data?.profileIconId}
                summonerLevel={data?.summonerLevel}
                region={match.params.region}
              />
            </ProfileContent>
          </ProfileContainer>
        )}
      </Flex>
    </>
  );
};
