import PropTypes from "prop-types";

const Button = ({ children, handleAction, className, type }) => {
  return (
    <button
      onClick={handleAction}
      type={type}
      className={`${className} rounded-lg py-2 px-4 font-bold text-white`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleAction: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
