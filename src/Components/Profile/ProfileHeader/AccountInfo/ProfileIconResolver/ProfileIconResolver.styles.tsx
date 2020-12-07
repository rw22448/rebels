import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { PropsWithTheme } from '../../../../Styles/Themes/Themes';

const ProfileIcon = styled.img`
  width: 120px;
  height: 120px;

  border-radius: 60px;

  position: relative;
  top: 4px;

  ${down('sm')} {
    width: 92px;
    height: 92px;
  }
`;

const ProfileIconContainer = styled.div`
  width: 128px;
  height: 128px;

  margin: 0 auto;

  border-radius: 64px;

  background-color: ${(props: PropsWithTheme) => props.theme.background};

  ${down('sm')} {
    width: 100px;
    height: 100px;
  }
`;

export { ProfileIcon, ProfileIconContainer };
