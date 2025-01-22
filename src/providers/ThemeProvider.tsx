import { createContext, useReducer, ReactNode, useEffect } from "react";

type Theme = "light" | "dark";
type ThemeState = { theme: Theme };
type ThemeAction = { type: "SET_THEME"; payload: Theme };

const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
} | undefined>(undefined);

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "SET_THEME":
      return { theme: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme: Theme = storedTheme || (prefersDark ? "dark" : "light");

  const [state, dispatch] = useReducer(themeReducer, { theme: initialTheme });

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
