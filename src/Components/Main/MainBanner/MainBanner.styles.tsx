import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const Banner = styled.img`
  width: 400px;
  height: 1080px;
`;

const BannerContainer = styled.div`
  z-index: 1;
  height: 100vh;

  position: absolute;
  right: 40px;
  overflow: hidden;

  ${down('lg')} {
    display: none;
  }
`;

export { Banner, BannerContainer };
