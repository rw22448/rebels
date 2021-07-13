import styled from 'styled-components';
import { ThemeObject } from '../../Styles/Themes/Themes';

interface NavigationProps extends ThemeObject {
  expanded: boolean;
}

const Navigation = styled.nav`
  flex: 0;
  min-width: ${(props: NavigationProps) => (props.expanded ? '204px' : '72px')};
  min-height: 100vh;
  user-select: none;
  background-color: ${(props: NavigationProps) => props.theme.nav.background};
  box-shadow: 3px 0px 6px
    ${(props: NavigationProps) => props.theme.shadows.shadowColour};

  transition: ${(props: NavigationProps) => {
    if (props.expanded) {
      return `background-color ${props.theme.transitions.short}, min-width ${props.theme.transitions.short}`;
    } else {
      return `background-color ${props.theme.transitions.short}, 
      min-width ${props.theme.transitions.short} ease ${props.theme.transitions.short}`;
    }
  }};
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;

  > div {
    margin-bottom: 8px;
  }
`;

export { Navigation, NavContainer };
