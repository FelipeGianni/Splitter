import React from 'react';

const Result = () => {
  return (
    <div class="result">
      <div className="result__label">
        <div className="title">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p>$4,27</p>
      </div>
      <div className="result__label">
        <div className="title">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p>$32,79</p>
      </div>
      <button className="result__reset">RESET</button>
    </div>
  );
}

export default Result;