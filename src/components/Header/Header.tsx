import { NavLink } from "react-router";
import LanguageToggle from '../Toggles/Language/LanguageToggle';
import ThemeToggle from '../Toggles/Theme/ThemeToggle';
import "./Header.css";

import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="header-container">
        <LanguageToggle />
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                {t("nav.home")}
                <div className="light-bar" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                {t("nav.projects")}
                <div className="light-bar" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery">
                {t("nav.gallery")}
                <div className="light-bar" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {t("nav.contact")}
                <div className="light-bar" />
              </NavLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header;