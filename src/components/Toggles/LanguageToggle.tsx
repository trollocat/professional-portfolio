import { useState } from "react";
import IconEN from '../../assets/en.svg';
import IconES from '../../assets/es.svg';
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language); // default to current language

  const handleLanguageChange = (lang: "en" | "es") => {
    i18n.changeLanguage(lang); // change language
    setActiveLang(lang); // update active language
  };

  return (
    <div className="language-toggle">
      <img
        src={IconEN}
        alt="english"
        title="english"
        className={activeLang === "en" ? "active" : ""}
        onClick={() => handleLanguageChange("en")}
      />
      <img
        src={IconES}
        alt="spanish"
        title="spanish"
        className={activeLang === "es" ? "active" : ""}
        onClick={() => handleLanguageChange("es")}
      />
      <span>{activeLang}</span>
    </div>
  );
};

export default LanguageToggle;
