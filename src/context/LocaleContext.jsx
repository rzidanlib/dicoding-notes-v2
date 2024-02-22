import { createContext, useEffect, useState } from "react";
import { getLocale, putLocale } from "../utils/local-storage";
import PropTypes from "prop-types";

export const LocaleContext = createContext({
  locale: "en",
  setLocale: () => {},
});

const LocaleProvder = ({ children }) => {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    setLocale(getLocale());
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    putLocale(newLocale);
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvder.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LocaleProvder;
