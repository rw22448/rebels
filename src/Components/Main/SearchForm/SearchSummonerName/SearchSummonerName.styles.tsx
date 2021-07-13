import styled from 'styled-components';
import { ThemeObject } from '../../../Styles/Themes/Themes';

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

  box-shadow: ${(object: ThemeObject) => object.theme.shadows.downShadow};
  background-color: ${(object: ThemeObject) => object.theme.containerColour};

  &:focus {
    outline: none;
  }

  color: ${(object: ThemeObject) => object.theme.contentColour};
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: ${(object: ThemeObject) => object.theme.fontWeights.regular};

  &:hover {
    &::placeholder {
      text-decoration: underline;
    }
  }

  &::placeholder {
    color: ${(object: ThemeObject) => object.theme.colours.grey.darkGrey};
  }
`;

const ErrorText = styled.div`
  margin-top: 8px;
  color: ${(object: ThemeObject) => object.theme.colours.red.red};
`;

export {
  SummonerName,
  LabelWrapper,
  SummonerNameLabel,
  StyledSearchTextField,
  ErrorText,
};
