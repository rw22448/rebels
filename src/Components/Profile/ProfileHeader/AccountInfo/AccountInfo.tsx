import React from 'react';
import { AccountInfoContainer } from './AccountInfo.styles';
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
        <ProfileIconResolver profileIconId={profileIconId} />
        <div>{name}</div>
      </AccountInfoContainer>
    </>
  );
};

export { AccountInfo };
