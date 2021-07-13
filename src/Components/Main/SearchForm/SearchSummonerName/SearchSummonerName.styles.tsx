import styled from 'styled-components';
import { PropsWithTheme } from '../../../Styles/Themes/Themes';

const SummonerName = styled.div`
  max-height: 85px;
`;

const LabelWrapper = styled.div`
  margin-bottom: 4px;
`;

const SummonerNameLabel = styled.div`
  font-size: 20px;
`;

const StyledSearchTextField = styled.input`
  padding: 0px;

  padding: 8px 24px;

  height: 54px;
  width: 100%;

  box-sizing: border-box;

  border: none;
  border-radius: 8px;

  box-shadow: ${(props: PropsWithTheme) => props.theme.shadows.downShadow};
  background-color: ${(props: PropsWithTheme) => props.theme.containerColour};

  &:focus {
    outline: none;
  }

  color: ${(props: PropsWithTheme) => props.theme.contentColour};
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: ${(props: PropsWithTheme) => props.theme.fontWeights.regular};

  &:hover {
    &::placeholder {
      text-decoration: underline;
    }
  }

  &::placeholder {
    color: ${(props: PropsWithTheme) => props.theme.colours.grey.darkGrey};
  }
`;

const ErrorText = styled.div`
  margin-top: 8px;
  color: ${(props: PropsWithTheme) => props.theme.colours.red.red};
`;

export {
  SummonerName,
  LabelWrapper,
  SummonerNameLabel,
  StyledSearchTextField,
  ErrorText,
};
