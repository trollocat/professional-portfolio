import { useEffect, useState } from "react";
import IconEN from '../../assets/en.svg';
import IconES from '../../assets/es.svg';
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language); // default to current language

  const handleLanguageChange = (lang: "en" | "es") => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  useEffect(() => {
    const title = activeLang === "en" ? "Joan Gonzalez's Portfolio" : "Portafolio de Joan Gonzalez";
    document.title = title;
  }, [activeLang])

  return (
    <button type="button" className="language-toggle" title={t("toggles.language-toggle")} onClick={() => handleLanguageChange(activeLang === "es" ? "en" : "es")}>
      <div className="flags-selector">
        <img
          src={IconEN}
          alt="english"
          title={t("toggles.english")}
          draggable="false"
          className={activeLang === "en" ? "active" : ""}
          onClick={(e) => { e.stopPropagation(); handleLanguageChange("en") }}
        />
        <img
          src={IconES}
          alt="spanish"
          title={t("toggles.spanish")}
          draggable="false"
          className={activeLang === "es" ? "active" : ""}
          onClick={(e) => { e.stopPropagation(); handleLanguageChange("es") }}
        />
      </div>
      <span><strong>{activeLang.toUpperCase()}</strong></span>
    </button>
  );
};

export default LanguageToggle;
