import { Trans, useTranslation } from "react-i18next";
import './Home.css';
import Timeline from "../../components/Timeline/Timeline";
import { NavLink } from "react-router";
import ScrollHint from "../../components/ScrollHint/ScrollHint";

export default function Home() {
  const { t } = useTranslation("home");
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
            {t(`home.calltoaction.button1`)}
          </p>
        </NavLink>
        <NavLink to="/contact" className="hero-secondary card">
          <p >
            {t('home.calltoaction.button2')}
          </p>
        </NavLink>
      </div>
      <ScrollHint />
      <Timeline />
    </div>
  )
}