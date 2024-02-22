import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getTheme, putTheme } from "../utils/local-storage";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(getTheme());
    if (theme === "light") document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }, [theme]);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    putTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
