import React, { useState, useEffect } from "react";

const Result = ({ bill, people, tip, customTip, resetValues }) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tipValue = tip != null ? tip : customTip;

    if (bill && people && tipValue) {
      const tipAmountPerson = ((bill * (tipValue / 100)) / people).toFixed(2);
      const totalPerson = ((bill * (tipValue / 100 + 1)) / people).toFixed(2);

      setTipAmount(tipAmountPerson);
      setTotal(totalPerson);
    }
  }, [bill, people, tip, customTip]);

  const onClickReset = (e) => {
    e.preventDefault();

    setTipAmount(0);
    setTotal(0);
    resetValues();
  };

  return (
    <div className="result">
      <div className="result__label">
        <div className="title">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p>${tipAmount}</p>
      </div>
      <div className="result__label">
        <div className="title">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p>${total}</p>
      </div>
      <button className="result__reset" onClick={(e) => onClickReset(e)}>
        RESET
      </button>
    </div>
  );
};

export default Result;
