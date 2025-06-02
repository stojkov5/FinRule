import { useTranslation } from "react-i18next";
import "../styles/Navbar.css"; // Make sure this includes the CSS for `.active-lang`

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="language-switcher lang-btn">
      <button
        onClick={() => changeLanguage("en")}
        className={`lang-btn ${currentLang === "en" ? "active-lang" : ""}`}
      >
        EN
      </button>
      <span className="px-1">|</span>
      <button
        onClick={() => changeLanguage("mk")}
        className={`lang-btn ${currentLang === "mk" ? "active-lang" : ""}`}
      >
        MK
      </button>
    </div>
  );
};

export default LanguageSwitcher;
