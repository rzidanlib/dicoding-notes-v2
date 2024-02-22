import { useContext } from "react";
import Navigation from "./Navigations";
import PropTypes from "prop-types";
import { LocaleContext } from "../../context/LocaleContext";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ onLogout }) => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="bg-white p-4 w-full shadow-md rounded-xl dark:bg-black dark:text-white transition-colors duration-300">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <p className="font-bold text-2xl">Notes APP</p>
          <Navigation lang={locale} />
        </div>

        <div className="flex items-center gap-2">
          <button onClick={changeTheme}>
            {theme === "light" ? (
              <FaMoon className="text-slate-900" size={20} />
            ) : (
              <FaSun className="text-yellow-300" size={20} />
            )}
          </button>
          <button
            onClick={toggleLocale}
            className="font-semibold hover:text-slate-600"
          >
            {locale === "id" ? "EN" : "IND"}
          </button>
          <button
            onClick={onLogout}
            className="bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-3 font-bold text-md text-white ml-3"
          >
            {locale === "id" ? "Keluar" : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
