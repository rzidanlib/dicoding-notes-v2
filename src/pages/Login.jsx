import { useContext } from "react";
import { login } from "../utils/api";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { AuthContent } from "../utils/locale-content";
import { LocaleContext } from "../context/LocaleContext";
import Input from "../components/ui/Input";
import useInput from "../hooks/useInput";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const [email, emailChangeHandler] = useInput("");
  const [password, passwordChangeHandler] = useInput("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error, data } = await login({ email, password });

    if (!error) {
      onLogin(data);
      navigate("/");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-2xl mb-6 dark:text-white">
        Login
      </h1>

      <form onSubmit={handleLogin}>
        <Input
          handleChange={emailChangeHandler}
          type="email"
          className="w-full mb-4 mt-2"
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
        />

        <Input
          handleChange={passwordChangeHandler}
          type="password"
          className="w-full mb-4 mt-2"
          name="password"
          label="Password"
          placeholder="*********"
        />

        <Button className="bg-blue-500 hover:bg-blue-700 w-full" type="submit">
          {AuthContent[locale].signin}
        </Button>
      </form>

      <div className="text-center mt-4 dark:text-white">
        {AuthContent[locale].helper[0]}
        <Link to={"/register"} className="text-blue-500 hover:text-blue-600">
          {AuthContent[locale].signup}
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
