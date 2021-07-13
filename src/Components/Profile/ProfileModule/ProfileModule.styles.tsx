import styled from 'styled-components';
import { ThemeObject } from '../../Styles/Themes/Themes';

const ProfileModuleHeader = styled.h2`
  margin-bottom: 4px;
`;

const ProfileModuleContent = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: ${(object: ThemeObject) => object.theme.shadows.downShadow};
  padding: 24px;
  background-color: ${(object: ThemeObject) => object.theme.containerColour};
`;

const ModuleContainer = styled(ProfileModuleContent)`
  display: flex;

  justify-content: center;
`;

export { ProfileModuleHeader, ProfileModuleContent, ModuleContainer };
