import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage';
import QuizRoot from './components/pages/quizRoot';
import LoginPage from './components/pages/loginpage';
import RootLayout from './components/pages/root';
import LoginRoot from './components/pages/LoginRoot';
import Policy from './components/Policy/policy';
import QuizPlay from './components/QuizPlay/QuizPlay';
import QuizStart from './components/QuizStart/QuizStart';
import QuizRules from './components/QuizRules/QuizRules';
import SideRoot from './components/pages/SideRoot';
import QuizStarted from './components/QuizStared/QuizStarted';
import History from './components/History/History';
import PartnerUs from './components/PartnerUs/PartnerUs';
import Terms from './components/Terms/Terms';
import Contact from './components/Contact/Contact';
import { useSelector } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
      {
        path: '/quiz/:quizId',
        element: <QuizRoot />,
        children: [
          {
            index: true,
            element: <QuizPlay />,
            
          },
        ]
      }

    ],
  },
  {
    path: '/side',
    element: <SideRoot />,
    children: [
      {
        path: 'quiz-rules',
        element: <QuizRules />
      },
      {
        path: 'history',
        element: <History />
      },
      {
        path: 'partnerus',
        element: <PartnerUs />
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: 'policy',
        element: <Policy />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
  {
    path: '/quiz/:quizId/start',
    element: <QuizStart />,
    children: [
      {
        index: true,
        element: <QuizStart />
      },

    ]
  },
  {
    path: '/quiz/:quizId/play',
    element: <QuizStarted />
  },
  {
    path: '/login',
    element: <LoginRoot />,
    children: [
      {
        index: true,
        element: <LoginPage />
      }
    ]
  },
])

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
