import React, { useState } from 'react';
import { Menu, Home, User, Book } from 'react-feather';
import { Navigation, NavContainer } from './Nav.styles';
import { NavIcon } from './NavIcon/NavIcon';
import { NavDivider } from './NavDivider/NavDivider';

const Nav = () => {
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
      </NavContainer>
    </Navigation>
  );
};

export { Nav };
