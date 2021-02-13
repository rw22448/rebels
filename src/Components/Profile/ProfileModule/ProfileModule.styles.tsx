import styled from 'styled-components';
import { PropsWithTheme } from '../../Styles/Themes/Themes';

const ProfileModuleHeader = styled.h2`
  margin-bottom: 4px;
`;

const ProfileModuleContent = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: ${(props: PropsWithTheme) => props.theme.shadows.downShadow};
  padding: 24px;
  background-color: ${(props: PropsWithTheme) => props.theme.containerColour};
`;

const ModuleContainer = styled(ProfileModuleContent)`
  display: flex;

  justify-content: center;
`;

export { ProfileModuleHeader, ProfileModuleContent, ModuleContainer };
