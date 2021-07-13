import styled from 'styled-components';
import { StyledButton } from '../../CommonStyles';
import { ThemeObject } from '../../Themes/Themes';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 295px;

  text-align: center;
`;

const Subtitle = styled.h4`
  width: 100%;
`;

const Description = styled.div`
  margin-top: 8px;
  color: ${(object: ThemeObject) => object.theme.colours.grey.darkGrey};
`;

const RetryButton = styled(StyledButton)`
  margin-top: 24px;
  background-color: ${(object: ThemeObject) => object.theme.colours.red.red};
  width: 160px;

  &:hover {
    background-color: ${(object: ThemeObject) =>
      object.theme.colours.red.darkRed};
  }

  &:active {
    background-color: ${(object: ThemeObject) =>
      object.theme.colours.red.darkerRed};
  }
`;

export { ErrorContainer, Subtitle, Description, RetryButton };
