import { useState, useEffect, useMemo, useCallback, useRef, createContext } from 'react';
import { Themes } from '../common/Enum';
import { toggle } from '../util/Tools';

interface ThemeContextProps {
  theme: Themes;
  setTheme: () => void;
}

interface IProps {
  children: JSX.Element;
}
export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: IProps): JSX.Element => {
  const [theme, setTheme] = useState<Themes>(Themes.light);
  const checkTheme = useRef((): void => {
    const theme = (localStorage.getItem('theme') as Themes) || Themes.light;
    setTheme(theme);
    document.getElementsByTagName('html')[0].dataset.theme = theme;
  });
  const updateTheme = useRef((theme: Themes): void => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.getElementsByTagName('html')[0].dataset.theme = theme;
  });
  const toggleTheme = toggle<Themes>(updateTheme.current, ...Object.values(Themes));
  useEffect(() => {
    checkTheme.current();
    window.addEventListener('storage', checkTheme.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      window.removeEventListener('storage', checkTheme.current);
    };
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
