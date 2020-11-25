import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';

const Banner = styled.img`
  max-width: ${(props: PropsWithTheme) => props.theme.contentSize.xl};
  height: 128px;
`;

const BannerContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;

  max-height: 128px;

  ${down('sm')} {
    display: none;
  }
`;

export { Banner, BannerContainer };
