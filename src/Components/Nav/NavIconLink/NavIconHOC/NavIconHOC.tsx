import React, { useContext } from 'react';
import { ThemeContext } from '../../../Contexts/ThemeContext';
import { lightTheme, darkTheme } from '../../../Styles/Themes/Themes';

interface NavIconHOCProps {
  color: string;
}

const NavIconHOC = (
  WrappedComponent: (props: NavIconHOCProps) => JSX.Element
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

export { NavIconHOC };
export type { NavIconHOCProps };
