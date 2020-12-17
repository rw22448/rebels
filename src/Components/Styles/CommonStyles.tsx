import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropsWithTheme } from './Themes/Themes';

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
  font-weight: ${(props: PropsWithTheme) => props.theme.fontWeights.semiBold};

  color: ${(props: PropsWithTheme) => props.theme.colours.white};
  background-color: ${(props: PropsWithTheme) => props.theme.colours.blue.blue};

  box-shadow: ${(props: PropsWithTheme) => props.theme.shadows.downShadow};

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &:hover {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.colours.blue.darkBlue};
  }

  &:active {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.colours.blue.darkerBlue};
  }
`;

export { Flex, FlexColumn, StyledLink, StyledButton };
