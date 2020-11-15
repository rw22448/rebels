import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme, Theme } from '../Styles/Themes/Themes';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLight: () => boolean;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  isLight: () => true,
});

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(lightTheme);

  const setMode = (localTheme: string, theme: Theme) => {
    localStorage.setItem('theme', localTheme);
    setTheme(theme);
  };

  const toggleTheme = () => {
    isLight() ? setMode('dark', darkTheme) : setMode('light', lightTheme);
  };

  const isLight = () => theme === lightTheme;

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    }

    if (localStorage.getItem('theme') === 'light') {
      setMode('light', lightTheme);
    } else {
      setMode('dark', darkTheme);
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
