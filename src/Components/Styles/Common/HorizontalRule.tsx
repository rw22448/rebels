import React from 'react';
import {
  HorizontalRuleContainer,
  StyledHorizontalRule,
} from './HorizontalRule.styles';

interface HorizontalRuleProps {
  width: number | 'full';
  ruleColour?: string;
  padding?: number;
}

const HorizontalRule = ({
  width,
  ruleColour,
  padding,
}: HorizontalRuleProps) => {
  return (
    <>
      <HorizontalRuleContainer width={width} padding={padding}>
        <StyledHorizontalRule width={width} ruleColour={ruleColour} />
      </HorizontalRuleContainer>
    </>
  );
};

export { HorizontalRule };
