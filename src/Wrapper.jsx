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
    <main className='bg-neutral-900 grid place-content-center h-screen text-white text-xl '>
      <div className='rounded-md bg-neutral-700 w-80'>
        {/* output */}
        <div className='m-2 p-4 bg-neutral-900 rounded-md overflow-hidden'>
          <span className='mr-1 text-base'>
            {result ? '(' + result + ')' : ''}
          </span>
          <span className='text-3xl'>{calculation}</span>
        </div>
        {/* input */}
        <div className='m-1 p-1'>
          <div className='grid grid-cols-5'>
            {symbols.map((symbol, i) => {
              return (
                <button
                  onClick={() => handleUpdateCalc(symbol)}
                  key={i}
                  className='btn mb-4 py-3 bg-zinc-600'
                >
                  {symbol}
                </button>
              );
            })}
          </div>
          <div className='grid grid-cols-4'>
            {numbers.map((number, i) => {
              return (
                <button
                  onClick={() => handleUpdateCalc(number)}
                  key={i}
                  className='btn py-3 bg-neutral-800'
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
            <button onClick={handleClear} className='btn bg-red-500'>
              C
            </button>
            <button onClick={handleProcent} className='btn'>
              %
            </button>
            <button onClick={handleSquareRoot} className='btn'>
              √
            </button>
            <p className='grid place-content-center'>🤓</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Wrapper };
