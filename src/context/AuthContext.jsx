import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUserLogged } from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setLoading(false);
    };

    fecthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authedUser, setAuthedUser, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
