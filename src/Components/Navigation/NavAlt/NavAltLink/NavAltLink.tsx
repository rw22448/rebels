import React from 'react';
import { StyledLink } from '../../../Styles/CommonStyles';
import { AltText, IconBadge } from './NavAltLink.styles';

interface NavAltLinkProps {
  text: string;
  to: string;
  icon: React.ReactNode;
}

const NavAltLink = ({ text, to, icon }: NavAltLinkProps) => {
  return (
    <StyledLink to={to}>
      <AltText>{text}</AltText>
      <IconBadge>{icon}</IconBadge>
    </StyledLink>
  );
};

export { NavAltLink };
