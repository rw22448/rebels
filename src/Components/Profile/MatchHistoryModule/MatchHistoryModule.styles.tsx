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
`;

const StyledVerticalRuleContainer = styled.div`
  ${down('sm')} {
    display: none;
  }
`;

export { Warning, MatchHistoryGrid, MatchContent, StyledVerticalRuleContainer };
