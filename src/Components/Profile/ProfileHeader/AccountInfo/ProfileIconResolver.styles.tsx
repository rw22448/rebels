import styled from 'styled-components';
import { AlertCircle } from 'react-feather';
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
  left: 4px;
`;

const ProfileIconBackground = styled.div`
  width: 128px;
  height: 128px;

  border-radius: 64px;

  background-color: ${(props: ProfileIconBackgroundProps) =>
    props.theme.background};

  position: relative;
  bottom: 48px;

  margin: 0 auto;
`;

export { ProfileIcon, ProfileIconBackground };
