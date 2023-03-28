import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { QuizContext } from '../QuizContext';

export const ScoreContext = createContext();

export function ScoreContextProvider({ children }) {
  const [score, setscore] = useState(0);
  const resultArray = ['a', 'c', 'b', 'c', 'b'];

  const { val, page } = useContext(QuizContext);

  const updateScore = () => {
    if (val === resultArray[page - 1]) {
      setscore(score + 30);
      // console.log(val);
    }
    // console.log(resultArray[page - 1]);
  };
  const value = useMemo(() => ({
    score,
    setscore,
    updateScore,
  }), [setscore, score, updateScore]);

  return (
    <ScoreContext.Provider value={value}>
      {children}
    </ScoreContext.Provider>
  );
}
