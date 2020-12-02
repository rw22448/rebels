import React from 'react';
import { IconArea, NavIconContainer, Text } from './NavLink.styles';

interface NavIconLinkProps {
  onClick?: () => void;
  icon: React.ReactNode;
  expanded?: boolean;
  text?: string;
}

const NavIconLink = ({ onClick, icon, text, expanded }: NavIconLinkProps) => {
  return (
    <NavIconContainer onClick={onClick} text={text} expanded={expanded}>
      <IconArea>{icon}</IconArea>
      <Text expanded={expanded}>{text}</Text>
    </NavIconContainer>
  );
};

export { NavIconLink };
