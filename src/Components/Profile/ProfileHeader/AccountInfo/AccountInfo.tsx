import React, { useEffect, useState } from 'react';
import {
  AccountDetailContainer,
  AccountInfoContainer,
  IconLevelContainer,
  RegionBadgeContainer,
  RegionBadge,
  SummonerLevelBadge,
  SummonerName,
} from './AccountInfo.styles';
import { ProfileIconResolver } from './ProfileIconResolver/ProfileIconResolver';

interface AccountInfoProps {
  name?: string;
  profileIconId?: number;
  summonerLevel?: number;
  region?: string;
  latestMatchDateTime: string;
}

const calculateLastOnlineAgo = (dateTimeString: string): string => {
  const currentDate = new Date();
  const date = new Date(dateTimeString);

  const differenceInDays = Math.floor(
    (currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays === 0) {
    return 'Today';
  }

  if (differenceInDays === 1) {
    return '1 day ago';
  }

  if (differenceInDays > 30) {
    return 'One month ago';
  }

  if (differenceInDays >= 60) {
    return 'Over one month ago';
  }

  return `${differenceInDays} days ago`;
};

const AccountInfo = ({
  name,
  profileIconId,
  summonerLevel,
  region,
  latestMatchDateTime,
}: AccountInfoProps) => {
  const [lastOnlineAgo, setlastOnlineAgo] = useState<string>();

  useEffect(() => {
    setlastOnlineAgo(calculateLastOnlineAgo(latestMatchDateTime));
  }, [latestMatchDateTime]);

  return (
    <>
      <AccountInfoContainer>
        <IconLevelContainer>
          <ProfileIconResolver profileIconId={profileIconId} />
          <SummonerLevelBadge>{summonerLevel}</SummonerLevelBadge>
        </IconLevelContainer>
        <AccountDetailContainer>
          <SummonerName>{name}</SummonerName>
          <p>Last online: {lastOnlineAgo}</p>
          <RegionBadgeContainer>
            <RegionBadge>{region && region.toLocaleUpperCase()}</RegionBadge>
          </RegionBadgeContainer>
        </AccountDetailContainer>
      </AccountInfoContainer>
    </>
  );
};

export { AccountInfo };
