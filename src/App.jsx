import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import FirstMcq from './pages/FirstMcq';
import Results from './pages/Results';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';
import FourthPage from './pages/fourthPage';
import Thumbnail from './pages/thumbnail';
import FifthPage from './pages/fifthPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Thumbnail />,
  },
  {
    path: 'main',
    element: <Main />,
    children: [
      {
        index: true,
        element: <FirstMcq />,
      },
      {
        path: 'second',
        element: <SecondPage />,
      },
      {
        path: 'third',
        element: <ThirdPage />,
      },
      {
        path: 'fourth',
        element: <FourthPage />,
      },
      {
        path: 'fifth',
        element: <FifthPage />,
      },
      {
        path: 'result',
        element: <Results />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
