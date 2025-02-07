import { Trans, useTranslation } from "react-i18next";
import './Home.css';
import ArrowDown from "../../components/Icons/arrowdown";
import { NavLink } from "react-router";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      <div className="hero" >
        <div className="hero-main card">
          <img src="portrait_transparent.webp" alt="portrait" />
          <div className='dummy-spacing'></div>
          <p>
            <Trans t={t} i18nKey="home.introduction" />
          </p>
        </div>
        <NavLink to="/projects" className="hero-secondary card">
          <p >
            {t('home.calltoaction.button1')}
          </p>
        </NavLink>
        <NavLink to="/contact" className="hero-secondary card">
          <p >
            {t('home.calltoaction.button2')}
          </p>
        </NavLink>
      </div>
      <div className="scroll-hint">
        <ArrowDown />
        <span>
          More about me (wip)
        </span>
        <ArrowDown />
      </div>
    </div>
  )
}