import React from 'react';
import {
  AccountDetailContainer,
  AccountInfoContainer,
  IconLevelContainer,
  SummonerLevel,
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
          <SummonerLevel>{summonerLevel}</SummonerLevel>
        </IconLevelContainer>
        <AccountDetailContainer>
          <SummonerName>{name}</SummonerName>
          <p>Last online: X days ago</p>
          <div>OCE</div>
        </AccountDetailContainer>
      </AccountInfoContainer>
    </>
  );
};

export { AccountInfo };
