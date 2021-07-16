import React, { useState } from 'react';
import Result from '../Result';

const Calculator = () => {
  const [bill, setBill]           = useState('');
  const [people, setPeople]       = useState('');
  const [tip, setTip]             = useState('');
  const [customTip, setCustomTip] = useState('');

  const handleClick = (e, val) => {
    e.preventDefault();

    setTip(val);
  }

  return (
    <div className="calculator">
      <div className="calculator__pt1">
        <div className="calculator__pt1__bill">
          <p>Bill</p>
          <input type="number" placeholder="0" value={bill} onChange={e => setBill(e.target.value)}/>
        </div>
        <div className="calculator__pt1__tip">
          <p>Select Tip %</p>
          <div className="calculator__pt1__tip__options">
            <button className={tip === 5 ? 'selected' : ''}  onClick={e => handleClick(e, 5)}>5%</button>
            <button className={tip === 10 ? 'selected' : ''} onClick={e => handleClick(e, 10)}>10%</button>
            <button className={tip === 15 ? 'selected' : ''} onClick={e => handleClick(e, 15)}>15%</button>
            <button className={tip === 25 ? 'selected' : ''} onClick={e => handleClick(e, 25)}>25%</button>
            <button className={tip === 50 ? 'selected' : ''} onClick={e => handleClick(e, 50)}>50%</button>
            <input type="number" placeholder="Custom" value={customTip} onChange={e => setCustomTip(e.target.value)} />
          </div>
        </div>
        <div className="calculator__pt1__people">
          <p>Number of People</p>
          <input type="number" className="numberInput" placeholder="0" value={people} onChange={e => setPeople(e.target.value)} />
        </div>
      </div>
      <Result bill={bill} people={people} tip={tip} customTip={customTip} />
    </div>
  );
}

export default Calculator;