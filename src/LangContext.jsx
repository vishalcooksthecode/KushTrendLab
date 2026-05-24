import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    services: 'Services', shoots: 'Shoots', portfolio: 'Portfolio',
    testimonials: 'Testimonials', contact: 'Contact', bookNow: 'Book Now',
    track: 'Track Order',
  },
  hi: {
    services: 'सेवाएं', shoots: 'शूट', portfolio: 'पोर्टफोलियो',
    testimonials: 'समीक्षाएं', contact: 'संपर्क', bookNow: 'अभी बुक करें',
    track: 'ऑर्डर ट्रैक करें',
  },
};

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
