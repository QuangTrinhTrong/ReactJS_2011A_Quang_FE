import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string | "A",
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function Button(props) {
  const { children, className, type, onClick } = props;

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
