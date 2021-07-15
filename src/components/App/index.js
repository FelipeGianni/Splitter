import React from 'react';
import Logo from '../../assets/images/logo.svg';
import Calculator from '../Calculator';

const App = () => {
  return (
    <div className="app">
      <img src={Logo} alt="Logo" className="app__logo" />
      <Calculator />
    </div>
  );
}

export default App;