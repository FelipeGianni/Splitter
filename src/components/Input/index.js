import React from "react";

const Input = ({
  type = "number",
  className = "",
  placeholder = "0",
  value,
  onInputChange,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onInputChange(e.target.value)}
    />
  );
};

export default Input;
