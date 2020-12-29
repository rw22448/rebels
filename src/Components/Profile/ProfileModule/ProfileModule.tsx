import React from 'react';
import { ProfileModuleHeader } from './ProfileModule.styles';

interface ProfileModuleProps {
  heading: string;
}

const ProfileModule = ({ heading }: ProfileModuleProps) => {
  return (
    <>
      <ProfileModuleHeader>{heading}</ProfileModuleHeader>
    </>
  );
};

export { ProfileModule };
