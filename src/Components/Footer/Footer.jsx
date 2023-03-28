import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { ScoreContext } from '../context/ScoreContext/scoreContext';

function Footer() {
  const {
    val, page, activePages, setval, setpage,
  } = useContext(QuizContext);
  const navigate = useNavigate();
  const pages = [, 'second', 'third', 'fourth', 'fifth', 'result'];
  const { updateScore, setscore } = useContext(ScoreContext);
  return (
    <div className="flex w-full items-center justify-around  bg-slate-100 h-16  ">
      {page < 6 && (
      <div className="flex items-center">
        <div className="bg-slate-300 w-60 h-3 rounded-full ">
          <div
            className="bg-green-500 h-3  rounded-full"
            style={{
              width: 48 * page,
            }}
          />
        </div>
        {page}
        /5
      </div>
      )}
      <div>
        <button
          disabled={!val && page <= 5}
          type="button"
          className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-slate-400 disabled:cursor-wait "
          onClick={() => (page === 6 ? (navigate('/', { replace: true }), setpage(1), setscore(0)) : (activePages(page), navigate(pages[page], { replace: true }), setval(''), updateScore()))}
        >
          {page === 5 ? 'Finish' : (page === 6 ? 'OKAY' : 'CONTINUE')}
        </button>

      </div>
    </div>
  );
}

export default Footer;
