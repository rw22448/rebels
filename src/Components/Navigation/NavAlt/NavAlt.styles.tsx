import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const NavigationAlt = styled.nav`
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
  padding-left: 24px;
  text-align: right;
  align-items: center;

  user-select: none;

  ${down('sm')} {
    gap: 8px;
  }
`;

export { NavigationAlt, NavAltContainer, Right };
