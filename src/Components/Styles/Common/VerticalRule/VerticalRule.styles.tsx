import styled from 'styled-components';
import { ThemeObject } from '../../Themes/Themes';

interface BaseVerticalRuleProps extends ThemeObject {
  height: number | 'full';
  ruleColour?: string;
  padding?: number;
}

const BaseVerticalRule = styled.div`
  height: ${(props: BaseVerticalRuleProps) =>
    props.height === 'full' ? '100%' : props.height + 'px'};
`;

const VerticalRuleContainer = styled(BaseVerticalRule)`
  padding: ${(props: BaseVerticalRuleProps) =>
    props.padding ? '0px ' + props.padding + 'px' : '0px'};
`;

const StyledVerticalRule = styled(BaseVerticalRule)`
  width: 2px;
  border-radius: 1px;
  background-color: ${(props: BaseVerticalRuleProps) =>
    props.ruleColour ? props.ruleColour : props.theme.contentColour};
`;

export { VerticalRuleContainer, StyledVerticalRule };
