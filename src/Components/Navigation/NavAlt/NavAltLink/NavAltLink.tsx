import React from 'react';
import { AltText } from './NavAltLink.styles';

interface NavAltLinkProps {
  text: string;
}

const NavAltLink = ({ text }: NavAltLinkProps) => {
  return (
    <>
      <AltText>{text}</AltText>
    </>
  );
};

export { NavAltLink };
