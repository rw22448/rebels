import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationAlt, NavAltContainer, Right } from './NavAlt.styles';
import { NavAltLink } from './NavAltLink/NavAltLink';

const NavAlt = () => {
  return (
    <NavigationAlt>
      <NavAltContainer>
        <Logo size={1} withText />
        <Right>
          <NavAltLink text="Home" />
          <NavAltLink text="Profile" />
          <NavAltLink text="Guide" />
          <NavAltLink text="Toggle theme" />
        </Right>
      </NavAltContainer>
    </NavigationAlt>
  );
};

export { NavAlt };
