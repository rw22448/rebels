import React, { useContext, useState } from 'react';
import { Menu, Home, User, Book, Sun, Moon } from 'react-feather';
import { RouteComponentProps } from 'react-router-dom';
import { Navigation, NavContainer } from './Nav.styles';
import { NavIconLink } from './NavLink/NavLink';
import { NavDivider } from './NavDivider/NavDivider';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { NavLinkHOC, NavLinkHOCProps } from '../NavLinkHOC/NavLinkHOC';

const Nav = ({ history }: RouteComponentProps) => {
  const { toggleTheme, isLight } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const MenuIcon = NavLinkHOC((props: NavLinkHOCProps) => <Menu {...props} />);
  const HomeIcon = NavLinkHOC((props: NavLinkHOCProps) => <Home {...props} />);
  const UserIcon = NavLinkHOC((props: NavLinkHOCProps) => <User {...props} />);
  const BookIcon = NavLinkHOC((props: NavLinkHOCProps) => <Book {...props} />);
  const SunIcon = NavLinkHOC((props: NavLinkHOCProps) => <Sun {...props} />);
  const MoonIcon = NavLinkHOC((props: NavLinkHOCProps) => <Moon {...props} />);

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
        <NavIconLink
          onClick={() => {
            history.push('/');
          }}
          icon={<HomeIcon />}
          expanded={isOpen}
          text="Home"
        />
        <NavIconLink icon={<UserIcon />} expanded={isOpen} text="Profile" />
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
