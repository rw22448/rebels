import React from 'react';
import { ProfileModuleHeader } from './ProfileModule.styles';

interface ProfileModuleProps {
  heading: string;
  children: React.ReactNode;
}

const ProfileModule = ({ heading, children }: ProfileModuleProps) => {
  return (
    <>
      <div>
        <ProfileModuleHeader>{heading}</ProfileModuleHeader>
        {children}
      </div>
    </>
  );
};

export { ProfileModule };
