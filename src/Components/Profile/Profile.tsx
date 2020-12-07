import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Nav } from '../Navigation/Nav/Nav';
import { Flex } from '../Styles/CommonStyles';
import { ProfileContainer, ProfileContent } from './Profile.styles';
import { AccountInfo } from './ProfileHeader/AccountInfo/AccountInfo';
import { ProfileBanner } from './ProfileHeader/ProfileBanner/ProfileBanner';

interface ProfileProps
  extends RouteComponentProps<{ region: string; username: string }> {}

const SummonerDTO = {
  id: '3rXsLDAt1RlhsyVkUt_wSHOYvQYm1S1oFgTzx-oODy6_',
  accountId: 'eOBTIufexpgKdyW3ZuAsheQSEfTms0pTswHcDUdnFh8APCg',
  puuid:
    'X97kVnywXh9rJ8dIn240wBzL8v_4i0pZsrD018ra8E1W8T4vRNuN3-C48lY-XxRwLaanu4BHnKhcWA',
  name: 'dahpla',
  profileIconId: 781,
  revisionDate: 1605595865000,
  summonerLevel: 185,
};

export const Profile = ({ match }: ProfileProps) => {
  return (
    <>
      <Flex>
        <Nav />
        <ProfileContainer>
          <ProfileContent>
            <ProfileBanner />
            <AccountInfo
              name={match.params.username}
              profileIconId={SummonerDTO.profileIconId}
              summonerLevel={SummonerDTO.summonerLevel}
              region={match.params.region}
            />
          </ProfileContent>
        </ProfileContainer>
      </Flex>
    </>
  );
};
