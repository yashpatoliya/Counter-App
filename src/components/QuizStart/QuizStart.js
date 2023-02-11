import { useParams } from "react-router-dom";
import Card from "../UI/BlurCard/Card";
import { ButtonOrange } from "../UI/Button/Button";
import classes from "./QuizStart.module.css";
import Ads from "../UI/Ads/Ads";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Link } from "react-router-dom";

const QuizStart = () => {
  const {quizId} = useParams();
  return (
    <>
    <MainNavigation start='true' title='English Grammar'/>
      <main>
        <Card className={classes.quizPlay}>
          <div className={classes.imgIcon}>
            <img src="../../assets/cardicon.svg" alt="Card Image" />
          </div>
          <div className={classes.quizPlay}>
            <h6>English Grammar</h6>
            <h3>
              Play and Win 200,000 <img src="../../assets/coin.png" alt="coin" />
            </h3>
            <h6>
              Entry : 100 <img src="../../assets/coin.png" alt="coin" />
            </h6>
            <h5>
              You've got 60 seconds to answer all questions. Answer many
              questions as you can.
            </h5>
            <h5>Join and save the coins you win! Its free & safe!</h5>
            <Link to={`/quiz/${quizId}/play`}><ButtonOrange>Start Quiz</ButtonOrange></Link>
          </div>
        </Card>
        <Ads />
        <Link to='/side/quiz-rules'>Quiz Rules</Link>
      </main>
    </>
  );
};

export default QuizStart;
