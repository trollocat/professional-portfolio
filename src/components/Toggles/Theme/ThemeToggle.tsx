import { useTheme } from "../../../providers/useTheme";
import { useTranslation } from "react-i18next";
import "./ThemeToggle.css"
import LightIcon from "../../Icons/Theme/LightIcon";
import DarkIcon from "../../Icons/Theme/DarkIcon";

const ThemeToggle = () => {
  const { state: themeState, dispatch: themeDispatch } = useTheme();
  const { t } = useTranslation();

  return (
    <button type="button" className="theme-toggle"
      title={t("toggles.theme-toggle")}
      onClick={() =>
        themeDispatch({
          type: "SET_THEME",
          payload: themeState.theme === "light" ? "dark" : "light",
        })
      }>
      {
        themeState.theme === "light"
          ?
          <DarkIcon />
          :
          <LightIcon />
      }
    </button>
  );
};

export default ThemeToggle;
