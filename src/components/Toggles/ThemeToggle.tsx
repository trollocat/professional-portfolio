import { useTheme } from "../../providers/useTheme";

const ThemeToggle = () => {
  const { state: themeState, dispatch: themeDispatch } = useTheme();

  return (
    <button
      type="button"
      onClick={() =>
        themeDispatch({
          type: "SET_THEME",
          payload: themeState.theme === "light" ? "dark" : "light",
        })
      }
    >
      toggle theme (current: {themeState.theme})
    </button>
  );
};

export default ThemeToggle;
