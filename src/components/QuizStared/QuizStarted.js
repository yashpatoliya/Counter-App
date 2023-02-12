import classes from "./QuizStarted.module.css";
import Card from "../UI/BlurCard/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../../store/quizSlice";

const QuizStarted = (props) => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(60);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quiz = useSelector((state) => state.quiz.currentQuiz.quiz);
  const curquiz = useSelector((state) => state.quiz.currentQuiz.question);
  const length = useSelector((state)=> state.quiz.currentQuiz.quiz.questions.length);
  console.log(quiz.questions)
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      navigate("/side/history");
    };
  }, [counter]);


  const handleOptionClick = ({ option, isCorrect, number }) => {
    setSelectedOption(option);
    
    setTimeout(()=>{
      dispatch(quizActions.NextQuestion({ number: number, ans: isCorrect }))
      if (quiz.questions.length == number){
        dispatch(quizActions.AddHistory({date : Date.now()}))
        navigate('/side/history');
      } 
      setSelectedOption(null);
    },1000)
  };

  const options = curquiz.options;
  return (
    <div className={classes.quiz}>
      <div className={classes.book_image}>
        <img src="../../../assets/cardicon.svg" alt="image" />
      </div>
      <p className={classes.title}>{quiz.name}</p>
      <Card>
        <label className={classes.label}>Question {curquiz.number}/{length}</label>
        <div className={classes.circle}>
          <h4>{counter}</h4>
          <span>Sec Left</span>
        </div>
        <p className={classes.question}>{curquiz.title}</p>
        <div>
          {options.map((option) => (

            <div
              key={option.value}
              style={{
                color: option.isCorrect
                  ? selectedOption === option.value
                    ? 'white'
                    : 'black'
                  : selectedOption === option.value
                    ? 'white'
                    : 'black',
                backgroundColor: option.isCorrect
                  ? selectedOption === option.value
                    ? 'green'
                    : 'white'
                  : selectedOption === option.value
                    ? 'red'
                    : 'white',
                padding: '10px',
                margin: '10px',
              }}
              onClick={() => handleOptionClick({ isCorrect: option.isCorrect, option: option.value, number: curquiz.number })}
              className={classes.button}
            >
              {option.value}
            </div>
          ))}
        </div>
      </Card>
      <p className={classes.score}>Your Score : {quiz.score}</p>
      <div className={classes.box_2}>
        <p>Banner Add</p>
      </div>
    </div>
  );
};
export default QuizStarted;
