import { createContext, useReducer, ReactNode, useEffect } from "react";

type Theme = "light" | "dark";
type ThemeState = { theme: Theme };
type ThemeAction = { type: "TOGGLE_THEME" };

const ThemeContext = createContext<{ state: ThemeState; dispatch: React.Dispatch<ThemeAction> } | undefined>(undefined);

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  } 
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(state.theme);
  }, [state.theme]);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
