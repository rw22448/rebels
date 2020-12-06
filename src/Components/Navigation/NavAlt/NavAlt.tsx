import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { Logo } from '../../Logo/Logo';
import { NavigationAlt, NavAltContainer, Right } from './NavAlt.styles';
import { NavAltButton } from './NavAltButton/NavAltButton';
import { NavAltLink } from './NavAltLink/NavAltLink';

const NavAlt = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <NavigationAlt>
      <NavAltContainer>
        <Logo size={1} withText />
        <Right>
          <NavAltLink text="Home" to="/" />
          <NavAltLink text="Profile" to="/" />
          <NavAltLink text="Guide" to="/" />
          <NavAltButton text="Toggle theme" onClick={toggleTheme} />
        </Right>
      </NavAltContainer>
    </NavigationAlt>
  );
};

export { NavAlt };
