import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';
import { Nav } from '../Navigation/Nav/Nav';
import { Loading } from '../Styles/Common/Loading/Loading';
import { Flex } from '../Styles/CommonStyles';
import {
  ProfileContainer,
  ProfileContent,
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

export const Profile = ({ match }: ProfileProps) => {
  const fetchProfileData = async (): Promise<SummonerDTO> => {
    return await axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/${match.params.region}/get-summoner/by-name/${match.params.summonerName}`
      )
      .then((result) => result.data as SummonerDTO)
      .catch((error) => {
        throw error;
      });
  };

  const { data, isLoading, isError, isSuccess } = useQuery(
    'fetchProfileData',
    fetchProfileData
  );

  return (
    <>
      <Flex>
        <Nav />

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
