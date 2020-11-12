import React from 'react';

interface ThemeTogglerProps {
  toggleTheme: () => void;
}

const ThemeToggler = ({ toggleTheme }: ThemeTogglerProps) => {
  return <div onClick={toggleTheme}>Theme toggle</div>;
};

export { ThemeToggler };
