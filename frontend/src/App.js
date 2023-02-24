import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
import QuizRoot from './components/pages/quizRoot';
import RootLayout from './components/pages/root';
import LoginRoot from './components/pages/LoginRoot';
import SideRoot from './components/pages/SideRoot';
const Home = React.lazy(() => import('./components/pages/homepage'))
const QuizPlay = React.lazy(() => import('./components/QuizPlay/QuizPlay'))
const QuizRules = React.lazy(() => import('./components/QuizRules/QuizRules'))
const QuizStart = React.lazy(() => import('./components/QuizStart/QuizStart'));
const QuizStarted = React.lazy(() => import('./components/QuizStared/QuizStarted'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: 'error found',
    children: [
      {
        path: '/',
        index: true,
        element: <Home/>,
      },
      {
        path: '/quiz/:quizId',
        element: <QuizRoot />,
        errorElement: 'error found',
        children: [
          {
            index: true,
            element: <QuizPlay/>,

          },
        ]
      }

    ],
  },
  {
    path: '/side',
    element: <SideRoot />,
    errorElement: 'error found',
    children: [
      {
        path: 'quiz-rules',
        element: <QuizRules/>,
      },
      {
        path: 'history',
        element: React.lazy(() => import('./components/History/History')),
      },
      {
        path: 'partnerus',
        element: React.lazy(() => import('./components/PartnerUs/PartnerUs')),
      },
      {
        path: 'terms',
        element: React.lazy(() => import('./components/Terms/Terms')),
      },
      {
        path: 'policy',
        element: React.lazy(() => import('./components/Policy/policy')),
      },
      {
        path: 'contact',
        element: React.lazy(() => import('./components/Contact/Contact')),
      }, {
        path: 'quizscore',
        element: React.lazy(() => import('./components/QuizScore/QuizScore')),
      },
    ]
  },
  {
    path: '/quiz/:quizId/start',
    element: <QuizStart/>,
    errorElement: 'error found',
  },
  {
    path: '/quiz/:quizId/play',
    element: <QuizStarted/>,
    errorElement: 'error found',
  },
  {
    path: '/login',
    element: <LoginRoot />,
    errorElement: 'error found',
    children: [
      {
        index: true,
        element: React.lazy(() => import('./components/Login/login'))
      }
    ]
  },
])

function App() {
  return (
    <div className="container">
      <Suspense fallback={<div> Please Wait... </div>} >
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
