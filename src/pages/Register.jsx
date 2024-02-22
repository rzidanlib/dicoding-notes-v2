import { useContext, useState } from "react";
import { register } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";
import Button from "../components/ui/Button";
import { AuthContent } from "../utils/locale-content";

const Register = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await register(form);

    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-2xl mb-6 dark:text-white">
        Register
      </h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="email" className="text-md mb-4 dark:text-white">
          Email
        </label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          name="email"
          onChange={handleChange}
          className="rounded-lg py-2 px-3 outline w-full mb-4 dark:bg-slate-800 dark:outline-white"
        />

        <label htmlFor="name" className="text-md mb-4 dark:text-white">
          Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          name="name"
          onChange={handleChange}
          className="rounded-lg py-2 px-3 outline w-full mb-4 dark:bg-slate-800 dark:outline-white"
        />

        <label htmlFor="email" className="text-md mb-4 dark:text-white">
          Password
        </label>
        <input
          type="password"
          placeholder="********"
          name="password"
          onChange={handleChange}
          className="rounded-lg py-2 px-3 outline w-full mb-4 dark:bg-slate-800 dark:outline-white"
        />
        <Button className="bg-blue-500 hover:bg-blue-700 w-full" type="submit">
          {AuthContent[locale].signup}
        </Button>
      </form>

      <div className="text-center mt-4 dark:text-white">
        {AuthContent[locale].helper[1]}
        <Link to={"/"} className="text-blue-500 hover:text-blue-600">
          {AuthContent[locale].signin}
        </Link>
      </div>
    </div>
  );
};

export default Register;
