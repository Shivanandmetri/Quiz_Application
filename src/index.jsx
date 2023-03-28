import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QuizContextProvider } from './Components/context/QuizContext';
import { ScoreContextProvider } from './Components/context/ScoreContext/scoreContext';
import ErrorBoundary from './ErrorBoundary';
import './style.scss';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <QuizContextProvider>
      <ScoreContextProvider>
        <App />
      </ScoreContextProvider>
    </QuizContextProvider>
  </ErrorBoundary>,
);
