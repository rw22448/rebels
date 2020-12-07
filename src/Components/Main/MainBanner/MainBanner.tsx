import React from 'react';
import { Banner, BannerContainer } from './MainBanner.styles';

const MainBanner = () => {
  return (
    <>
      <BannerContainer>
        <Banner src="/images/aurelion-sol-banner.png" />
      </BannerContainer>
    </>
  );
};

export { MainBanner };
