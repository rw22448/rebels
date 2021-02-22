import React from 'react';
import { MatchBadgeContainer, Placement } from './MatchBadge.styles';

interface MatchBadgeProps {
  placement: number;
}

const MatchBadge = ({ placement }: MatchBadgeProps) => {
  return (
    <>
      <MatchBadgeContainer placement={placement}>
        <Placement>{placement}</Placement>
      </MatchBadgeContainer>
    </>
  );
};

export { MatchBadge };
