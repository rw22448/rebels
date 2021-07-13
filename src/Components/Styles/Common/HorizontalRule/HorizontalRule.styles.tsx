import styled from 'styled-components';
import { ThemeObject } from '../../Themes/Themes';

interface BaseHorizontalRuleProps extends ThemeObject {
  width: number | 'full';
  ruleColour?: string;
  padding?: number;
}

const BaseHorizontalRule = styled.div`
  width: ${(props: BaseHorizontalRuleProps) =>
    props.width === 'full' ? '100%' : props.width + 'px'};
`;

const HorizontalRuleContainer = styled(BaseHorizontalRule)`
  padding: ${(props: BaseHorizontalRuleProps) =>
    props.padding ? props.padding + 'px 0px' : '0px'};
`;

const StyledHorizontalRule = styled(BaseHorizontalRule)`
  height: 2px;
  border-radius: 1px;
  background-color: ${(props: BaseHorizontalRuleProps) =>
    props.ruleColour ? props.ruleColour : props.theme.contentColour};
`;

export { HorizontalRuleContainer, StyledHorizontalRule };
