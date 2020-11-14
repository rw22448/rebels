import React from 'react';
import { IconArea, NavIconContainer, Text } from './NavIcon.styles';

interface NavIconProps {
  onClick?: () => void;
  icon: React.ReactNode;
  expanded?: boolean;
  text?: string;
}

const NavIcon = ({ onClick, icon, text, expanded }: NavIconProps) => {
  return (
    <NavIconContainer onClick={onClick} text={text} expanded={expanded}>
      <IconArea>{icon}</IconArea>
      <Text expanded={expanded}>{text}</Text>
    </NavIconContainer>
  );
};

export { NavIcon };
