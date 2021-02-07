import React from 'react';
import {
  VerticalRuleContainer,
  StyledVerticalRule,
} from './VerticalRule.styles';

interface VerticalRuleProps {
  height: number | 'full';
  ruleColour?: string;
  padding?: number;
}

const VerticalRule = ({ height, ruleColour, padding }: VerticalRuleProps) => {
  return (
    <>
      <VerticalRuleContainer height={height} padding={padding}>
        <StyledVerticalRule height={height} ruleColour={ruleColour} />
      </VerticalRuleContainer>
    </>
  );
};

export { VerticalRule };
