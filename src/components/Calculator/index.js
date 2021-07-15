import React from 'react';
import Result from '../Result';

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculator__pt1">
        <div className="calculator__pt1__bill">
          <p>Bill</p>
          <input type="number" value="142.55" autocomplete="off" />
        </div>
        <div className="calculator__pt1__tip">
          <p>Select Tip %</p>
          <div className="calculator__pt1__tip__options">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input type="number" placeholder="Custom" />
          </div>
        </div>
        <div className="calculator__pt1__people">
          <p>Number of People</p>
          <input type="number" value="5" className="numberInput" />
        </div>
      </div>
      <Result />
    </div>
  );
}

export default Calculator;