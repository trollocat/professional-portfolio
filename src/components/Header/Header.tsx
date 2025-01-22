import { NavLink } from "react-router";
import "./Header.css"
import LanguageToggle from '../Toggles/LanguageToggle';
import ThemeToggle from '../Toggles/ThemeToggle';

import { useTranslation } from "react-i18next";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header>
            <div className="toggles-container">
                <LanguageToggle></LanguageToggle>
                <ThemeToggle></ThemeToggle>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            {t("nav.home")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            {t("nav.projects")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">
                            {t("nav.gallery")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            {t("nav.about")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;