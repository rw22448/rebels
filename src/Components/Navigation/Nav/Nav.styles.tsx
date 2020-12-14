import styled from 'styled-components';
import { PropsWithTheme } from '../../Styles/Themes/Themes';

interface NavigationProps extends PropsWithTheme {
  expanded: boolean;
}

const Navigation = styled.nav`
  flex: 0;
  min-width: ${(props: NavigationProps) => (props.expanded ? '204px' : '72px')};
  min-height: 100vh;
  user-select: none;
  background-color: ${(props: NavigationProps) => props.theme.nav.background};
  box-shadow: 3px 0px 6px ${(props: NavigationProps) => props.theme.shadow};

  transition: min-width
      ${(props: NavigationProps) => props.theme.transitions.short},
    background-color
      ${(props: NavigationProps) => props.theme.transitions.short};
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
