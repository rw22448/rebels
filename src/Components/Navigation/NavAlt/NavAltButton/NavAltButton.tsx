import React from 'react';
import { AltButton } from './NavAltButton.styles';

interface NavAltButtonProps {
  text: string;
  onClick: () => void;
}

const NavAltButton = ({ text, onClick }: NavAltButtonProps) => {
  return <AltButton onClick={onClick}>{text}</AltButton>;
};

export { NavAltButton };
