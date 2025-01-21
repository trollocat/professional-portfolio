import { NavLink } from "react-router";
import { useTheme } from "../ThemeHooks";
import IconEN from '../assets/us-uk-split.svg';
import IconES from '../assets/argentina.svg';

const ThemeToggle = () => {
    const { state, dispatch } = useTheme();
    return (
        <button type="button" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
            Switch to {state.theme === "light" ? "dark" : "light"}
        </button>
    );
};

export const Header = () => {
    return (
        <header>
            <div className="toggles-container">
                <div className="language-toggle">
                    <img src={IconEN} alt="english" />
                    <img src={IconES} alt="spanish" />
                </div>
                <ThemeToggle />
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                            projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
                            gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                            about
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;