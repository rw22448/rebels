import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const Banner = styled.img`
  width: 1266px;
  height: 128px;
`;

const BannerContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;

  max-height: 128px;

  ${down('md')} {
    display: none;
  }
`;

export { Banner, BannerContainer };
