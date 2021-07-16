import React from 'react';
import { Banner, BannerContainer } from './ProfileBanner.styles';

const ProfileBanner = () => {
  return (
    <>
      <BannerContainer>
        {/* Artwork by Mr.Misang 미스터 미상 @mrmisang https://mrmisang.com/ */}
        <Banner
          src="/images/profile-banner-set-4-mr.misang.jpg"
          alt="Set 4 profile banner"
        />
      </BannerContainer>
    </>
  );
};

export { ProfileBanner };
