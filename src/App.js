import MainNavigation from './components/MainNavigation/MainNavigation';
import Ads from './components/UI/Ads/Ads';
import Tabs from './components/UI/Tabs/tabs';
import QuizCard from './components/QuizCard/QuizCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <MainNavigation />
      <main>
        <Ads />
        <Tabs />
      </main>
    </div>
  );
}

export default App;
