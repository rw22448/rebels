import styled from 'styled-components';
import { Theme } from '../Styles/Themes/Themes';

interface NavigationProps {
  expanded: boolean;
  theme: Theme;
}

const Navigation = styled.nav`
  width: ${(props: NavigationProps) => (props.expanded ? '204px' : '72px')};
  height: 100vh;
  user-select: none;
  background-color: ${(props: NavigationProps) => props.theme.nav.background};
  box-shadow: 3px 0px 3px ${(props: NavigationProps) => props.theme.shadow};
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
