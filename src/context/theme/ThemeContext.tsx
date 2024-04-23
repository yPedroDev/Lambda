import React, { ReactNode } from "react";
import {useLocalStorage} from "@/hooks/storage";
interface ThemeContextType {
  darkMode: boolean;
  toggleDark: () => void;
}

interface ThemeProps {
  children: ReactNode;
}
const DarkContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const DarkModeProvider = ({ children }: ThemeProps) => {
  const [darkMode, setDark] = useLocalStorage("isDark", true);
  var toggle = darkMode;

  const toggleDark = () => {
    toggle = toggle = !toggle;
    toggle ? setDark(true) : setDark(false);
  };
  return (
    <DarkContext.Provider value={{ darkMode, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};

function useDarkMode(): ThemeContextType {
  const context = React.useContext(DarkContext);
  if (!context) {
    throw new Error("useDarkMode deve ser usado dentro de um DarkModeProvider");
  }
  return context;
}

export { DarkModeProvider, DarkContext, useDarkMode };
