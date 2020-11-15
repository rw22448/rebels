import React, { useContext, useState } from 'react';
import { Menu, Home, User, Book, Sun, Moon } from 'react-feather';
import { Navigation, NavContainer } from './Nav.styles';
import { NavIcon } from './NavIcon/NavIcon';
import { NavDivider } from './NavDivider/NavDivider';
import { ThemeContext } from '../Contexts/ThemeContext';

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navigation expanded={isOpen}>
      <NavContainer>
        <NavIcon
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          icon={<Menu color="#a3a3a3" />}
        />
        <NavDivider />
        <NavIcon
          icon={<Home color="#a3a3a3" />}
          expanded={isOpen}
          text="Home"
        />
        <NavIcon
          icon={<User color="#a3a3a3" />}
          expanded={isOpen}
          text="Profile"
        />
        <NavIcon
          icon={<Book color="#a3a3a3" />}
          expanded={isOpen}
          text="Guide"
        />
        <NavDivider />
        <NavIcon
          onClick={() => {
            toggleTheme();
          }}
          icon={<Sun color="#a3a3a3" />}
          expanded={isOpen}
          text="Toggle theme"
        />
      </NavContainer>
    </Navigation>
  );
};

export { Nav };
