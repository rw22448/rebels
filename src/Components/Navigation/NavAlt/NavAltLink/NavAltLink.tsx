import React from 'react';
import { StyledLink } from '../../../Styles/CommonStyles';
import { AltText } from './NavAltLink.styles';

interface NavAltLinkProps {
  text: string;
  to: string;
}

const NavAltLink = ({ text, to }: NavAltLinkProps) => {
  return (
    <StyledLink to={to}>
      <AltText>{text}</AltText>
    </StyledLink>
  );
};

export { NavAltLink };
