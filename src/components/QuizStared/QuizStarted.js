import classes from "./QuizStarted.module.css";
import Card from "../UI/BlurCard/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizStarted = (props) => {
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(60);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      navigate("/");
    };
  }, [counter]);


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { value: 'Option 1', isCorrect: false },
    { value: 'Option 2', isCorrect: true },
    { value: 'Option 3', isCorrect: false },
  ];
  return (
    <div className={classes.quiz}>
      <div className={classes.book_image}>
        <img src="../../../assets/cardicon.svg" alt="image" />
      </div>
      <p className={classes.title}>English Grammar</p>
      <Card>
        <p className={classes.circle}>
          <h6>{counter}</h6>
          <span>Sec Left</span>
        </p>
        <p className={classes.question}>What is related to the earthquake?</p>
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
              onClick={() => handleOptionClick(option.value)}
            >
              {option.value}
            </div>
          ))}
        </div>
      </Card>
      <p className={classes.score}>Your Score : {score}</p>
      <div className={classes.box_2}>
        <p>Banner Add</p>
      </div>
    </div>
  );
};
export default QuizStarted;
