import { Trans, useTranslation } from "react-i18next";
import './Home.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="hero-wrapper" >
      <div className="hero-main card">
        <img src="portrait_transparent.webp" alt="portrait" />
        <div className='dummy-spacing'></div>
        <p>
          <Trans t={t} i18nKey="home.introduction" />
        </p>
      </div>
      <div className="hero-secondary card">
        <p>
          {t('home.calltoaction.button1')}
        </p>
      </div>
      <div className="hero-secondary card">
        <p>
          {t('home.calltoaction.button2')}
        </p>
      </div>
    </div>
  )
}