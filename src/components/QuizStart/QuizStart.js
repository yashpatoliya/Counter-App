import { useParams } from "react-router-dom";
import Card from "../UI/BlurCard/Card";
import { ButtonOrange } from "../UI/Button/Button";
import classes from "./QuizStart.module.css";
import Ads from "../UI/Ads/Ads";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scoreActions } from "../../store/scoreSlice";

const QuizStart = () => {
  const { quizId } = useParams();
  
  const dispatch = useDispatch();
  const quiz = useSelector((state) => {
    let fatched = state.quiz.quizes;
    for (let i in fatched) {
      if (fatched[i].id == quizId) {
        return { ...fatched[i] }
      }
    }
  });
  console.log(quiz);
  const EntryCoinHandler = () => {
    dispatch(scoreActions.EntryCoinsHandler({ entry: quiz.entry }));
  }
  return (
    <>
      <MainNavigation start='true' title={quiz.name} />
      <main>
        <Card className={classes.quizPlay}>
          <div className={classes.imgIcon}>
            <img src="../../assets/cardicon.svg" alt="Card Image" />
          </div>
          <div className={classes.quizPlay}>
            <h6>{quiz.name}</h6>
            <h3>
              {quiz.title} <img src="../../assets/coin.png" alt="coin" />
            </h3>
            <h6>
              Entry : {quiz.entry} <img src="../../assets/coin.png" alt="coin" />
            </h6>
            <h5>
              You've got 60 seconds to answer all questions. Answer many
              questions as you can.
            </h5>
            <h5>Join and save the coins you win! Its free & safe!</h5>
            <Link to={`/quiz/${quizId}/play`} onClick={EntryCoinHandler}><ButtonOrange>Start Quiz</ButtonOrange></Link>
          </div>
        </Card>
        <Ads />
        <Link to='/side/quiz-rules'>Quiz Rules</Link>
      </main>
    </>
  );
};

export default QuizStart;
