import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { lightTheme, darkTheme } from '../../Styles/Themes/Themes';

interface NavLinkHOCProps {
  color: string;
}

const NavLinkHOC = (
  WrappedComponent: (props: NavLinkHOCProps) => JSX.Element
) => {
  const { isLight } = useContext(ThemeContext);

  return () => (
    <WrappedComponent
      color={
        isLight() ? lightTheme.nav.contentColour : darkTheme.nav.contentColour
      }
    />
  );
};

export { NavLinkHOC };
export type { NavLinkHOCProps };
