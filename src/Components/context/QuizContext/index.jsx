import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

export const QuizContext = createContext();

export function QuizContextProvider({ children }) {
  const [val, setval] = useState('');
  const [page, setpage] = useState(1);

  const activeItem = useCallback(
    (type) => {
      setval(type);
    },
    [val],
  );

  const activePages = useCallback(
    (v) => {
      if (v < 6) {
        setpage(v + page);
        // console.log(page);
      } else {
        setpage(1);
      }
    },
    [setpage],
  );

  const value = useMemo(() => ({
    val,
    activeItem,
    setpage,
    activePages,
    page,
    setval,
  }), [val, page, setval, activePages, setpage, activeItem]);

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}
