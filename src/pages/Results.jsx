import React, { useContext } from 'react';
import { ScoreContext } from '../Components/context/ScoreContext/scoreContext';

function Results() {
  const { score } = useContext(ScoreContext);

  return (
    <div className="flex flex-col items-center">
      <div>
        <svg className="mt-4" width="147" height="155" viewBox="0 0 147 155" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M121.743 68.3608H24.938V152.049H121.743V68.3608Z" fill="url(#paint0_linear_14_516)" />
          <path d="M119.689 70.4233V149.986H27.0005V70.4233H119.689ZM123.814 66.2983H22.8755V154.111H123.814V66.2983Z" fill="#F0EBE6" />
          <path d="M27.0005 110.205H99.6005" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M105.178 3L3 47.8954L13.6066 72.035L115.784 27.1396L105.178 3Z" fill="url(#paint1_linear_14_516)" stroke="#F0EBE6" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M119.417 130.03C130.366 130.03 139.242 121.154 139.242 110.205C139.242 99.2559 130.366 90.3801 119.417 90.3801C108.468 90.3801 99.5923 99.2559 99.5923 110.205C99.5923 121.154 108.468 130.03 119.417 130.03Z" fill="#F0EBE6" stroke="url(#paint2_linear_14_516)" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M119.417 100.239V120.171" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M129.391 110.205H109.451" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M53.8048 93.2263C56.2798 95.7013 61.7248 110.205 61.7248 110.205C61.7248 110.205 47.2461 104.785 44.7463 102.285C44.1504 101.689 43.6778 100.982 43.3553 100.203C43.0328 99.4245 42.8668 98.59 42.8668 97.7473C42.8668 96.9046 43.0328 96.0702 43.3553 95.2917C43.6778 94.5131 44.1504 93.8057 44.7463 93.2098C45.9497 92.0064 47.5819 91.3303 49.2838 91.3303C50.1265 91.3303 50.9609 91.4963 51.7395 91.8188C52.518 92.1413 53.2254 92.614 53.8213 93.2098L53.8048 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M69.6448 93.2263C67.1698 95.7013 61.7248 110.205 61.7248 110.205C61.7248 110.205 76.2035 104.785 78.7033 102.285C79.2992 101.689 79.7718 100.982 80.0943 100.203C80.4168 99.4245 80.5828 98.59 80.5828 97.7473C80.5828 96.9046 80.4168 96.0702 80.0943 95.2917C79.7718 94.5131 79.2992 93.8057 78.7033 93.2098C78.1074 92.614 77.4 92.1413 76.6215 91.8188C75.8429 91.4963 75.0085 91.3303 74.1658 91.3303C73.3231 91.3303 72.4887 91.4963 71.7101 91.8188C70.9316 92.1413 70.2242 92.614 69.6283 93.2098L69.6448 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M53.5573 127.711L61.7248 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M69.8923 127.711L61.7248 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M131.858 64.4173L130.513 71.9413C130.47 72.1358 130.362 72.3097 130.207 72.4344C130.052 72.5591 129.859 72.627 129.659 72.627C129.46 72.627 129.267 72.5591 129.112 72.4344C128.957 72.3097 128.849 72.1358 128.806 71.9413L127.238 64.4586C126.892 62.5856 126.012 60.8523 124.706 59.4665C123.399 58.0808 121.72 57.1014 119.871 56.6458L112.619 55.0701C112.444 55.0141 112.292 54.904 112.183 54.7558C112.075 54.6075 112.017 54.4287 112.017 54.2451C112.017 54.0615 112.075 53.8827 112.183 53.7344C112.292 53.5861 112.444 53.4761 112.619 53.4201L119.821 51.6298C121.656 51.1164 123.304 50.0844 124.567 48.6576C125.83 47.2308 126.654 45.4698 126.941 43.5861L128.286 36.0703C128.329 35.8759 128.437 35.702 128.592 35.5773C128.747 35.4526 128.941 35.3846 129.14 35.3846C129.339 35.3846 129.532 35.4526 129.687 35.5773C129.842 35.702 129.951 35.8759 129.994 36.0703L131.561 43.5531C131.906 45.4276 132.784 47.1626 134.091 48.55C135.398 49.9373 137.078 50.9179 138.928 51.3741L146.18 52.9416C146.355 52.9976 146.507 53.1076 146.616 53.2559C146.724 53.4042 146.782 53.583 146.782 53.7666C146.782 53.9502 146.724 54.129 146.616 54.2773C146.507 54.4255 146.355 54.5356 146.18 54.5916L138.978 56.3901C137.145 56.9023 135.499 57.9319 134.236 59.3555C132.973 60.7792 132.148 62.5366 131.858 64.4173Z" fill="url(#paint3_linear_14_516)" />
          <defs>
            <linearGradient id="paint0_linear_14_516" x1="54.2337" y1="162.708" x2="92.456" y2="57.6936" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A1F71" />
              <stop offset="0.06" stopColor="#313A85" />
              <stop offset="0.14" stopColor="#51609F" />
              <stop offset="0.24" stopColor="#6D80B7" />
              <stop offset="0.34" stopColor="#839AC9" />
              <stop offset="0.46" stopColor="#95AFD8" />
              <stop offset="0.59" stopColor="#A1BDE2" />
              <stop offset="0.74" stopColor="#A8C5E8" />
              <stop offset="1" stopColor="#AAC8EA" />
            </linearGradient>
            <linearGradient id="paint1_linear_14_516" x1="52.1046" y1="78.8275" x2="66.6741" y2="-3.78799" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A1F71" />
              <stop offset="0.06" stopColor="#313A85" />
              <stop offset="0.14" stopColor="#51609F" />
              <stop offset="0.24" stopColor="#6D80B7" />
              <stop offset="0.34" stopColor="#839AC9" />
              <stop offset="0.46" stopColor="#95AFD8" />
              <stop offset="0.59" stopColor="#A1BDE2" />
              <stop offset="0.74" stopColor="#A8C5E8" />
              <stop offset="1" stopColor="#AAC8EA" />
            </linearGradient>
            <linearGradient id="paint2_linear_14_516" x1="115.622" y1="131.762" x2="123.22" y2="88.6476" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F8654" />
              <stop offset="0.02" stopColor="#1F8C55" />
              <stop offset="0.16" stopColor="#21A65B" />
              <stop offset="0.3" stopColor="#23BA60" />
              <stop offset="0.47" stopColor="#24C863" />
              <stop offset="0.67" stopColor="#25D065" />
              <stop offset="1" stopColor="#25D366" />
            </linearGradient>
            <linearGradient id="paint3_linear_14_516" x1="126.199" y1="72.0568" x2="132.576" y2="35.9301" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F8654" />
              <stop offset="0.02" stopColor="#1F8C55" />
              <stop offset="0.16" stopColor="#21A65B" />
              <stop offset="0.3" stopColor="#23BA60" />
              <stop offset="0.47" stopColor="#24C863" />
              <stop offset="0.67" stopColor="#25D065" />
              <stop offset="1" stopColor="#25D366" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p
        className="text-center text-4xl p-5 text-blue-700 mt-10"
      >
        Results of Fantasy quiz #156
      </p>
      <div className="flex flex-col gap-2 items-center bg-white h-40 w-80 justify-center">
        <div className="flex items-center gap-2">
          <svg className="fill-green-500 bg-slate-200 rounded-full h-9 w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M27 27q-2.5 0-4.25-1.75T21 21q0-2.5 1.75-4.25T27 15q2.5 0 4.25 1.75T33 21q0 2.5-1.75 4.25T27 27Zm-16 7q-1.25 0-2.125-.875T8 31V11q0-1.25.875-2.125T11 8h32q1.25 0 2.125.875T46 11v20q0 1.25-.875 2.125T43 34Zm5-3h22q0-2.1 1.45-3.55Q40.9 26 43 26V16q-2.1 0-3.55-1.45Q38 13.1 38 11H16q0 2.1-1.45 3.55Q13.1 16 11 16v10q2.1 0 3.55 1.45Q16 28.9 16 31Zm24 9H5q-1.25 0-2.125-.875T2 37V14h3v23h35Zm-29-9V11v20Z" /></svg>
          <p>
            SCORE GAINED :
            {' '}
            <span className="font-bold text-2xl">{score}</span>
          </p>
        </div>
        <div className="flex items-center">
          <svg className="fill-green-500 bg-slate-200 rounded-full h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>
          <p>
            CORRECT PREDICTIONS:
            {' '}
            <span className="font-bold text-2xl">{score / 30}</span>
            {' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Results;
