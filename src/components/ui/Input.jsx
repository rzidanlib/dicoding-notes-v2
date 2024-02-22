import PropTypes from "prop-types";

const Input = (props) => {
  const { handleChange, className, type, placeholder, label, name } = props;

  return (
    <>
      {label && (
        <label htmlFor={name} className="text-md dark:text-white">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        className={`rounded-lg py-2 px-3 outline ${className} dark:bg-slate-800 dark:outline-white dark:text-white`}
      />
    </>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
