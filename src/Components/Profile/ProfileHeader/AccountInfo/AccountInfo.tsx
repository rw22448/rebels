import React from 'react';
import {
  AccountDetailContainer,
  AccountInfoContainer,
  IconLevelContainer,
  RegionBadgeContainer,
  RegionBadge,
  SummonerLevelBadge,
  SummonerName,
} from './AccountInfo.styles';
import { ProfileIconResolver } from './ProfileIconResolver';

interface AccountInfoProps {
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

const AccountInfo = ({
  name,
  profileIconId,
  summonerLevel,
}: AccountInfoProps) => {
  return (
    <>
      <AccountInfoContainer>
        <IconLevelContainer>
          <ProfileIconResolver profileIconId={profileIconId} />
          <SummonerLevelBadge>{summonerLevel}</SummonerLevelBadge>
        </IconLevelContainer>
        <AccountDetailContainer>
          <SummonerName>{name}</SummonerName>
          <p>Last online: X days ago</p>
          <RegionBadgeContainer>
            <RegionBadge>OCE</RegionBadge>
          </RegionBadgeContainer>
        </AccountDetailContainer>
      </AccountInfoContainer>
    </>
  );
};

export { AccountInfo };
