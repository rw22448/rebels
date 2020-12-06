import styled from 'styled-components';

const NavigationAlt = styled.nav`
  flex: 0;
  width: 100%;
  height: 48px;
`;

const NavAltContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, auto);

  margin-left: auto;
  text-align: right;
  align-items: center;

  user-select: none;
`;

export { NavigationAlt, NavAltContainer, Right };
