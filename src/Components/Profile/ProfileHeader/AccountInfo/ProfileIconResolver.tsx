import React, { useState } from 'react';
import {
  ProfileIcon,
  ProfileIconBackground,
} from './ProfileIconResolver.styles';

interface ProfileIconResolverProps {
  profileIconId: number;
}

const ProfileIconResolver = ({ profileIconId }: ProfileIconResolverProps) => {
  const [iconError, setIconError] = useState(false);

  return (
    <ProfileIconBackground>
      {iconError ? (
        <ProfileIcon src="/images/deafultSummonerIcon.png" />
      ) : (
        <ProfileIcon
          src={`https://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/${profileIconId}.png`}
          onError={() => {
            setIconError(true);
          }}
        />
      )}
    </ProfileIconBackground>
  );
};

export { ProfileIconResolver };
