import React, { useState } from 'react';

function Wrapper({
  symbols,
  numbers,
  result,
  calculation,
  handleClear,
  handleUpdateCalc,
  handleCalculate,
  handleDeleteNum,
  handleProcent,
  handleSquareRoot,
}) {
  return (
    <main className='bg-neutral-800 grid place-content-center h-screen text-white text-xl '>
      <div className='rounded-md bg-neutral-700 max-w-sm'>
        {/* output */}
        <div className='m-2 p-1 bg-neutral-900 rounded-md overflow-hidden'>
          <span className='mr-1 text-sm'>
            {result ? '(' + result + ')' : ''}
          </span>
          <span className='text-2xl'>{calculation}</span>
        </div>
        {/* input */}
        <div className='m-1 p-1'>
          <div>
            {symbols.map((symbol, i) => {
              return (
                <button
                  onClick={() => handleUpdateCalc(symbol)}
                  key={i}
                  className='btn'
                >
                  {symbol}
                </button>
              );
            })}
          </div>
          <div className='grid grid-cols-3'>
            {numbers.map((number, i) => {
              return (
                <button
                  onClick={() => handleUpdateCalc(number)}
                  key={i}
                  className='btn'
                >
                  {number}
                </button>
              );
            })}
            <button onClick={handleCalculate} className='btn bg-green-700'>
              =
            </button>
            <button onClick={handleDeleteNum} className='btn'>
              Del
            </button>
            <button onClick={handleClear} className='btn'>
              C
            </button>
            <button onClick={handleProcent} className='btn'>
              %
            </button>
            <button onClick={handleSquareRoot} className='btn'>
              √
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Wrapper };
