import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('');
  const [calculated, setCalculated] = useState(false);

  const handleNumber = (number) => {
    if (display === '0' || calculated) {
      setDisplay(number);
      setCalculated(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setCalculated(false);
    if (calculated) {
      setFormula(display + operator);
    } else {
      setFormula(formula + display + operator);
    }
    setDisplay('0');
  };

  const handleDecimal = () => {
    if (calculated) {
      setDisplay('0.');
      setCalculated(false);
      return;
    }
    
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleEquals = () => {
    try {
      const result = eval(formula + display);
      setDisplay(String(result));
      setFormula('');
      setCalculated(true);
    } catch (error) {
      setDisplay('Erreur');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFormula('');
    setCalculated(false);
  };

  const handleBackspace = () => {
    if (display.length === 1 || display === 'Erreur') {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="formula">{formula}</div>
        <div className="current-value">{display}</div>
      </div>
      <div className="calculator-buttons">
        <button className="clear" onClick={handleClear}>AC</button>
        <button onClick={handleBackspace}>⌫</button>
        <button className="operator" onClick={() => handleOperator('/')}>/</button>
        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button className="operator" onClick={() => handleOperator('*')}>×</button>
        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button className="operator" onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>
        <button className="operator" onClick={() => handleOperator('+')}>+</button>
        <button className="zero" onClick={() => handleNumber('0')}>0</button>
        <button onClick={handleDecimal}>.</button>
        <button className="equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default Calculator; 