import { Wrapper } from './Wrapper';
import React, { useState } from 'react';

const App = () => {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('0');
  const [zeroCount, setZeroCount] = useState('0');

  const symbols = ['+', '-', '*', '/', '.'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleUpdateCalc(value) {
    if (
      (symbols.includes(value) && calculation === '') ||
      (symbols.includes(value) && symbols.includes(calculation.slice(-1))) ||
      (value === 0 && zeroCount.includes(calculation.slice(-2)))
    )
      return;

    setCalculation((calculation) => calculation + value);

    if (!symbols.includes(value)) {
      setResult(eval(calculation + value).toString());
    }
  }

  function handleCalculate() {
    if (calculation === '') return;
    setCalculation(eval(calculation).toString());
  }
  function handleDeleteNum() {
    setCalculation(calculation.slice(0, -1));
    if (calculation.length === 0) {
      return;
    }
    if (calculation === 'Infinity') {
      setCalculation(calculation.slice(0, -calculation.length));
    }
  }

  function handleClear() {
    setCalculation(calculation.slice(0, -calculation.length));
    setResult('0');
  }

  function handleProcent() {
    setCalculation(calculation / 100);
  }

  function handleSquareRoot() {
    setCalculation(Math.sqrt(eval(calculation).toString()));
  }

  return (
    <Wrapper
      symbols={symbols}
      numbers={numbers}
      result={result}
      calculation={calculation}
      handleClear={handleClear}
      handleUpdateCalc={handleUpdateCalc}
      handleCalculate={handleCalculate}
      handleDeleteNum={handleDeleteNum}
      handleProcent={handleProcent}
      handleSquareRoot={handleSquareRoot}
    />
  );
};

export default App;
