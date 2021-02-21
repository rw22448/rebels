import styled from 'styled-components';
import { StyledButton } from '../../CommonStyles';
import { PropsWithTheme } from '../../Themes/Themes';

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
  color: ${(props: PropsWithTheme) => props.theme.colours.grey.grey};
`;

const RetryButton = styled(StyledButton)`
  margin-top: 24px;
  background-color: ${(props: PropsWithTheme) => props.theme.colours.red.red};
  width: 160px;

  &:hover {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.colours.red.darkRed};
  }

  &:active {
    background-color: ${(props: PropsWithTheme) =>
      props.theme.colours.red.darkerRed};
  }
`;

export { ErrorContainer, Subtitle, Description, RetryButton };
