import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import React, { Suspense , lazy} from 'react';
import QuizRoot from './components/pages/quizRoot';
import RootLayout from './components/pages/root';
import LoginRoot from './components/pages/LoginRoot';
import SideRoot from './components/pages/SideRoot';
// import {Loader as PlayLoader } from "./components/QuizPlay/QuizPlay";
import axios from 'axios'
const Home = lazy(() => import('./components/pages/homepage'))
const QuizPlay = lazy(() => import('./components/QuizPlay'))
const QuizRules = lazy(() => import('./components/QuizRules/QuizRules'))
const QuizStart = lazy(() => import('./components/QuizStart/QuizStart'));
const QuizStarted = lazy(() => import('./components/QuizStared/QuizStarted'))
const History = lazy(() => import('./components/History/History'));
const Partnerus = lazy(() => import('./components/PartnerUs/PartnerUs'));
const Terms = lazy(() => import('./components/Terms/Terms'));
const Policy = lazy(() => import('./components/Policy/policy'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const QuizScore = lazy(() => import('./components/QuizScore/QuizScore'));
const Login = lazy(() => import('./components/Login/login'));
// const Spinner = lazy(() => import('./components/Spinner/Spinner'));
const Error = lazy(()=> import('./components/Error'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error/>,
    children: [
      {
        id : 'quiz-data',
        path: '/',
        index: true,
        element: <Home />,
        loader : async()=> {
          let data = await axios.get("http://localhost:8080/quizes");
          let quizes = await data.data.response;
          console.log(quizes)
          return quizes;
        },
      },
      {
        path: '/quiz/:quizId',
        element: <QuizRoot />,
        children: [
          {
            index: true,
            element: <QuizPlay />,
            loader : async({params})=> {
              let data = await axios.get("http://localhost:8080/quizes/"+params.quizId);
              let quizes = await data.data.response;
              return quizes;
            },

          },
        ]
      }

    ],
  },
  {
    path: '/side',
    element: <SideRoot />,
    errorElement: <Error/>,
    children: [
      {
        path: 'quiz-rules',
        element: <QuizRules />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'partnerus',
        element: <Partnerus />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'policy',
        element: <Policy />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }, {
        path: 'quizscore',
        element: <QuizScore />,
      },
    ]
  },
  {
    path: '/quiz/:quizId/start',
    element: <QuizStart />,
    errorElement: <Error/>,
    loader : async({params})=> {
      let data = await axios.get("http://localhost:8080/quizes/"+params.quizId);
      let quizes = await data.data.response;
      return quizes;
    },
  },
  {
    path: '/quiz/:quizId/play',
    element: <QuizStarted />,
    errorElement: <Error/>,
  },
  {
    path: '/login',
    element: <LoginRoot />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
])

function App() {


  return (
    <div className="container">
      <Suspense fallback={<div>Loading... </div>} >
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
