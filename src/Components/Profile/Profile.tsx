import React from 'react';
import { ProfileContainer, ProfileContent } from './Profile.styles';
import { ProfileBanner } from './ProfileHeader/ProfileBanner/ProfileBanner';

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileBanner />
      </ProfileContent>
    </ProfileContainer>
  );
};
