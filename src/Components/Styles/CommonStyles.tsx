import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeObject } from './Themes/Themes';

const Flex = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;

  box-sizing: border-box;
  height: 38px;

  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-weight: ${(object: ThemeObject) => object.theme.fontWeights.semiBold};

  color: ${(object: ThemeObject) => object.theme.colours.white};
  background-color: ${(object: ThemeObject) => object.theme.colours.blue.blue};

  box-shadow: ${(object: ThemeObject) => object.theme.shadows.downShadow};

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &:hover {
    background-color: ${(object: ThemeObject) =>
      object.theme.colours.blue.darkBlue};
  }

  &:active {
    background-color: ${(object: ThemeObject) =>
      object.theme.colours.blue.darkerBlue};
  }
`;

export { Flex, FlexColumn, StyledLink, StyledButton };
