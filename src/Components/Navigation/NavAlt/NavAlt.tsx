import React, { useContext } from 'react';
import { Book, Home, Moon, Sun, User } from 'react-feather';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { Logo } from '../../Logo/Logo';
import { NavLinkHOC, NavLinkHOCProps } from '../NavLinkHOC/NavLinkHOC';
import { NavigationAlt, NavAltContainer, Right } from './NavAlt.styles';
import { NavAltButton } from './NavAltButton/NavAltButton';
import { NavAltLink } from './NavAltLink/NavAltLink';

const NavAlt = () => {
  const { toggleTheme, isLight } = useContext(ThemeContext);

  const HomeIcon = NavLinkHOC((props: NavLinkHOCProps) => <Home {...props} />);
  const UserIcon = NavLinkHOC((props: NavLinkHOCProps) => <User {...props} />);
  const BookIcon = NavLinkHOC((props: NavLinkHOCProps) => <Book {...props} />);
  const SunIcon = NavLinkHOC((props: NavLinkHOCProps) => <Sun {...props} />);
  const MoonIcon = NavLinkHOC((props: NavLinkHOCProps) => <Moon {...props} />);

  return (
    <NavigationAlt>
      <NavAltContainer>
        <Logo size={1} withText />
        <Right>
          <NavAltLink text="Home" to="/" icon={<HomeIcon />} />
          <NavAltLink text="Profile" to="/" icon={<UserIcon />} />
          <NavAltLink text="Guide" to="/" icon={<BookIcon />} />
          <NavAltButton
            text="Toggle theme"
            onClick={toggleTheme}
            icon={isLight() ? <MoonIcon /> : <SunIcon />}
          />
        </Right>
      </NavAltContainer>
    </NavigationAlt>
  );
};

export { NavAlt };
