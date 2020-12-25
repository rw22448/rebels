import React, { useState } from 'react';
import {
  ProfileIcon,
  ProfileIconContainer,
} from './ProfileIconResolver.styles';

interface ProfileIconResolverProps {
  profileIconId?: number;
}

const ProfileIconResolver = ({ profileIconId }: ProfileIconResolverProps) => {
  const [iconError, setIconError] = useState(false);

  return (
    <ProfileIconContainer>
      {iconError ? (
        <ProfileIcon src="/images/deafult-summoner-icon.png" />
      ) : (
        <ProfileIcon
          src={`https://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/${profileIconId}.png`}
          onError={() => {
            setIconError(true);
          }}
        />
      )}
    </ProfileIconContainer>
  );
};

export { ProfileIconResolver };
