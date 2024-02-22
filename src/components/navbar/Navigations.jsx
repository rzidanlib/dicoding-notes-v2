import { Link, useLocation } from "react-router-dom";
import { NavbarContent } from "../../utils/locale-content";
import PropTypes from "prop-types";

const Navigation = ({ lang }) => {
  const { pathname } = useLocation();
  const pathActive = {
    active: "text-blue-500 underline dark:text-blue-500",
    inactive:
      "text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500",
  };

  const links = [{ path: "/" }, { path: "/archive" }, { path: "/addnote" }];

  return (
    <nav>
      <ul className="flex gap-3">
        {links.map((link, index) => (
          <li
            key={index}
            className={`${
              pathname === link.path ? pathActive.active : pathActive.inactive
            } py-1 px-2 font-semibold rounded-lg text-lg`}
          >
            <Link to={link.path}>{NavbarContent[lang].link[index]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Navigation;
