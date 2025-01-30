import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import IconEN from '../../../assets/en.svg';
import IconES from '../../../assets/es.svg';
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language); // default to current language
  const [isAlreadySelected, setIsAlreadySelected] = useState(false);

  const handleLanguageChange = (lang: "en" | "es") => {
    if (lang === activeLang) {
      setIsAlreadySelected(true);
      setTimeout(() => setIsAlreadySelected(false), 300);
    } else {
      i18n.changeLanguage(lang);
      setActiveLang(lang);
    }
  };

  useEffect(() => {
    const title = activeLang === "en" ? "Joan Gonzalez's Portfolio" : "Portafolio de Joan Gonzalez";
    document.title = title;
  }, [activeLang]);

  return (
    <button
      type="button"
      className="language-toggle"
      title={t("toggles.language-toggle")}
      onClick={() => handleLanguageChange(activeLang === "es" ? "en" : "es")}
    >
      <div className="flags-selector">
        <img
          src={IconEN}
          alt="english"
          title={t("toggles.english")}
          draggable="false"
          className={`${activeLang === "en" ? "active" : ""} ${isAlreadySelected && activeLang === "en" ? "shake" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handleLanguageChange("en");
          }}
        />
        <img
          src={IconES}
          alt="spanish"
          title={t("toggles.spanish")}
          draggable="false"
          className={`${activeLang === "es" ? "active" : ""} ${isAlreadySelected && activeLang === "es" ? "shake" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handleLanguageChange("es");
          }}
        />
      </div>
      <span>
        <strong>{activeLang.toUpperCase()}</strong>
      </span>
    </button>
  );
};

export default LanguageToggle;
