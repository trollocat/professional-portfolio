import { NavLink } from "react-router";
import "./Header.css"
import LanguageToggle from '../Toggles/LanguageToggle';
import ThemeToggle from '../Toggles/ThemeToggle';

import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="header-container">
        <div className="toggles-container">
          <LanguageToggle></LanguageToggle>
          <ThemeToggle></ThemeToggle>
        </div>
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
              <NavLink to="/about">
                {t("nav.about")}
                <div className="light-bar" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;