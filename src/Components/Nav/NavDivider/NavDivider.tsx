import React from 'react';
import { Divider, DividerContainer } from './NavDivider.styles';

interface NavDividerProps {
  expanded: boolean;
}

const NavDivider = ({ expanded }: NavDividerProps) => {
  return (
    <DividerContainer expanded={expanded}>
      <Divider />
    </DividerContainer>
  );
};

export { NavDivider };
