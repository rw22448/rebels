import { useState, useEffect } from 'react';
import { lightTheme, darkTheme, Theme } from './Themes';

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState(lightTheme);

  const setMode = (localTheme: string, theme: Theme) => {
    localStorage.setItem('theme', localTheme);
    setTheme(theme);
  };

  const toggleTheme = () => {
    theme === lightTheme
      ? setMode('dark', darkTheme)
      : setMode('light', lightTheme);
  };

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

  return [theme, toggleTheme];
};

export { useTheme };
