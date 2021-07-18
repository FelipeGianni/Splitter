import React, { useState } from "react";
import Result from "../Result";
import Button from "../Button";
import Input from "../Input";

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState("");

  const resetValues = () => {
    setBill("");
    setPeople("");
    setTip(null);
    setCustomTip("");
  };

  return (
    <div className="calculator">
      <div className="calculator__pt1">
        <div className="calculator__pt1__bill">
          <p>Bill</p>
          <Input value={bill} onInputChange={setBill} />
        </div>
        <div className="calculator__pt1__tip">
          <p>Select Tip %</p>
          <div className="calculator__pt1__tip__options">
            <Button value={5} tip={tip} handleClickButton={setTip} />
            <Button value={10} tip={tip} handleClickButton={setTip} />
            <Button value={15} tip={tip} handleClickButton={setTip} />
            <Button value={25} tip={tip} handleClickButton={setTip} />
            <Button value={50} tip={tip} handleClickButton={setTip} />
            <Input
              placeholder="Custom"
              value={customTip}
              onInputChange={setCustomTip}
            />
          </div>
        </div>
        <div className="calculator__pt1__people">
          <p>Number of People</p>
          <Input
            className="numberInput"
            value={people}
            onInputChange={setPeople}
          />
        </div>
      </div>
      <Result
        bill={bill}
        people={people}
        tip={tip}
        customTip={customTip}
        resetValues={resetValues}
      />
    </div>
  );
};

export default Calculator;
