import React, { useContext, useState } from 'react';
import { Menu, Home, User, Book, Sun, Moon } from 'react-feather';
import { Navigation, NavContainer } from './Nav.styles';
import { NavIconLink } from './NavIconLink/NavIconLink';
import { NavDivider } from './NavDivider/NavDivider';
import { ThemeContext } from '../Contexts/ThemeContext';
import {
  NavIconHOC,
  NavIconHOCProps,
} from './NavIconLink/NavIconHOC/NavIconHOC';

const Nav = () => {
  const { toggleTheme, isLight } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const MenuIcon = NavIconHOC((props: NavIconHOCProps) => <Menu {...props} />);
  const HomeIcon = NavIconHOC((props: NavIconHOCProps) => <Home {...props} />);
  const UserIcon = NavIconHOC((props: NavIconHOCProps) => <User {...props} />);
  const BookIcon = NavIconHOC((props: NavIconHOCProps) => <Book {...props} />);
  const SunIcon = NavIconHOC((props: NavIconHOCProps) => <Sun {...props} />);
  const MoonIcon = NavIconHOC((props: NavIconHOCProps) => <Moon {...props} />);

  return (
    <Navigation expanded={isOpen}>
      <NavContainer>
        <NavIconLink
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          icon={<MenuIcon />}
        />
        <NavDivider />
        <NavIconLink icon={<HomeIcon />} expanded={isOpen} text="Home" />
        <NavIconLink icon={<UserIcon />} expanded={isOpen} text="Search" />
        <NavIconLink icon={<BookIcon />} expanded={isOpen} text="Guide" />
        <NavDivider />
        <NavIconLink
          onClick={() => {
            toggleTheme();
          }}
          icon={isLight() ? <MoonIcon /> : <SunIcon />}
          expanded={isOpen}
          text="Toggle theme"
        />
      </NavContainer>
    </Navigation>
  );
};

export { Nav };
