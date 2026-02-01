import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-card shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        {/* UK Flag */}
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm overflow-hidden">
          <rect width="20" height="14" fill="#012169"/>
          <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2.8"/>
          <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.6"/>
          <path d="M10 0V14M0 7H20" stroke="white" strokeWidth="4.6"/>
          <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.8"/>
        </svg>
        <span className="hidden sm:inline">EN</span>
      </button>
      
      <button
        onClick={() => setLanguage("ar")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "ar"
            ? "bg-card shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="التبديل للعربية"
      >
        {/* Egypt Flag */}
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm overflow-hidden">
          <rect width="20" height="4.67" fill="#CE1126"/>
          <rect y="4.67" width="20" height="4.67" fill="white"/>
          <rect y="9.33" width="20" height="4.67" fill="black"/>
          {/* Eagle emblem simplified */}
          <circle cx="10" cy="7" r="1.5" fill="#C09300"/>
        </svg>
        <span className="hidden sm:inline">عربي</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
