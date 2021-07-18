import React from "react";

const Button = ({ value, tip, handleClickButton }) => {
  const onClickButton = (e, value) => {
    e.preventDefault();

    if (tip === value) {
      handleClickButton(null);
    } else {
      handleClickButton(value);
    }
  };

  return (
    <button
      className={tip === value ? "selected" : ""}
      onClick={(e) => onClickButton(e, value)}
    >
      {value}%
    </button>
  );
};

export default Button;
