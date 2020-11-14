import styled from 'styled-components';

interface NavigationProps {
  expanded: boolean;
}

const Navigation = styled.nav`
  width: ${(props: NavigationProps) => (props.expanded ? '204px' : '72px')};
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.16);
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
