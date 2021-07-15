import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { ThemeObject } from '../../Styles/Themes/Themes';

const Warning = styled.div`
  color: ${(object: ThemeObject) => object.theme.colours.grey.grey};
`;

const MatchHistoryGrid = styled.div`
  display: grid;
  gap: 12px;
`;

const MatchContent = styled.div`
  display: flex;

  flex-flow: row wrap;
`;

const StyledVerticalRuleContainer = styled.div`
  ${down('sm')} {
    display: none;
  }
`;

const StyledHorizontalRuleContainer = styled.div`
  flex-basis: 100%;

  display: none;

  ${down('sm')} {
    display: initial;
  }
`;

const AltStyledVerticalRuleContainer = styled(StyledVerticalRuleContainer)`
  ${down('md')} {
    display: none;
  }
`;

export {
  Warning,
  MatchHistoryGrid,
  MatchContent,
  StyledVerticalRuleContainer,
  StyledHorizontalRuleContainer,
  AltStyledVerticalRuleContainer,
};
