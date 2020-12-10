import React from 'react';
import {
  AltButtonText,
  ButtonIconBadge,
  AltButtonContainer,
} from './NavAltButton.styles';

interface NavAltButtonProps {
  text: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const NavAltButton = ({ text, onClick, icon }: NavAltButtonProps) => {
  return (
    <AltButtonContainer onClick={onClick}>
      <AltButtonText>{text}</AltButtonText>
      <ButtonIconBadge>{icon}</ButtonIconBadge>
    </AltButtonContainer>
  );
};

export { NavAltButton };
