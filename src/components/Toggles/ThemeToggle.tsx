import { useTheme } from "../../providers/useTheme";
import IconDark from '../../assets/dark.svg';
import IconLight from '../../assets/light.svg';
import { useTranslation } from "react-i18next";
import "./ThemeToggle.css"

const ThemeToggle = () => {
  const { state: themeState, dispatch: themeDispatch } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="theme-toggle"
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
          <img
            src={IconDark}
            alt="dark"
            title="dark"
            className="active dark"
          />
          :
          <img
            src={IconLight}
            alt="light"
            title="light"
            className="active light"
          />
      }
    </div>
  );
};

export default ThemeToggle;
