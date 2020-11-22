import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { Theme } from '../../../Styles/Themes/Themes';

interface ProfileIconBackgroundProps {
  theme: Theme;
}

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

const ProfileIconBackground = styled.div`
  width: 128px;
  height: 128px;

  margin: 0 auto;

  border-radius: 64px;

  background-color: ${(props: ProfileIconBackgroundProps) =>
    props.theme.background};

  ${down('sm')} {
    width: 100px;
    height: 100px;
  }
`;

export { ProfileIcon, ProfileIconBackground };
