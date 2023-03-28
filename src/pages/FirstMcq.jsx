import clsx from 'clsx';
import React, { useContext } from 'react';
import { QuizContext } from '../Components/context/QuizContext';

function FirstMcq() {
  const { activeItem, val } = useContext(QuizContext);
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-2 py-6">
        <p className="lg:text-3xl sm:text-xl font-bold ">
          Who was known as Iron man of India?
        </p>

      </div>
      <div className="py-16">
        <button
          type="button"
          onClick={() => activeItem('a')}
          className={clsx('bg-white h-14 rounded-md w-80 flex items-center justify-center gap-5', { 'bg-green-500': val === 'a' })}
        >
          <p
            className={clsx('bg-orange-100 px-3 py-1 rounded-full font-bold text-xl', { 'px-1  bg-slate-300': val === 'a' })}
          >
            {val === 'a' ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>) : ('A') }
          </p>
          <p className="font-bold">
            Sardar Vallabhbhai Patel
          </p>
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() => activeItem('b')}
          className={clsx('bg-white h-14 rounded-md w-80 flex items-center justify-center gap-5', { 'bg-green-500': val === 'b' })}
        >
          <p
            className={clsx('bg-orange-100 px-3 py-1 rounded-full font-bold text-xl', { 'px-1  bg-slate-300': val === 'b' })}
          >
            {val === 'b' ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>) : ('B') }
          </p>
          {/* <div className="rounded-full bg-slate-300 m-2 px-2">A</div> */}
          <p className="font-bold">
            Jawaharlal Nehru
          </p>
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() => activeItem('c')}
          className={clsx('bg-white h-14 rounded-md w-80 flex items-center justify-center gap-5', { 'bg-green-500': val === 'c' })}
        >
          <p
            className={clsx('bg-orange-100 px-3 py-1 rounded-full font-bold text-xl', { 'px-1  bg-slate-300': val === 'c' })}
          >
            {val === 'c' ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>) : ('C') }
          </p>

          <p className="font-bold">

            Subhash Chandra Bose
          </p>
        </button>
      </div>
    </div>
  );
}

export default FirstMcq;
