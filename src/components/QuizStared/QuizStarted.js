import classes from "./QuizStarted.module.css";
import Card from "../UI/BlurCard/Card";
import { Button } from "../UI/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizStarted = (props) => {
  const [counter, setCounter] = useState(60);
  const [score, setScore] = useState(0);
  const [quizLive,setQuizLive] = useState()
  const navigate = useNavigate();
  const quiz = [
    {
      name: "English Grammar",
      score,
      result : {
        trueAns : [],
        falseAns : []
      },
      questions: [
        {
          question: "What is related to the earthquake?",
          options: [
            {
              opt: "Weighing Scale",
            },
            {
              opt: "Richter Scale",
            },
            {
              opt: "Matric Scale",
            },
          ],
          answer: "Richter Scale",
        },
        {
          question: "What is related to the second?",
          options: [
            {
              opt: "Weighing Scale",
            },
            {
              opt: "Richter Scale",
            },
            {
              opt: "Matric Scale",
            },
          ],
          answer: "Richter Scale",
        },
        {
          question: "What is related to the third?",
          options: [
            {
              opt: "Weighing Scale",
            },
            {
              opt: "Richter Scale",
            },
            {
              opt: "Matric Scale",
            },
          ],
          answer: "Richter Scale",
        },
      ],
    },
  ];

  let quizNumber = 0;


  const ansCheck = (data) => {
    if(data.select == 'yash'){
      alert(true);
    }else{
      alert(false);
    }
    quizNumber++;
  }

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      navigate("/");
    };
    setQuizLive(quiz.questions[quizNumber])
    console.log('first')
  }, [counter,quizNumber]);

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
        <p className={classes.question}>{quizLive.question}</p>
        {[{opt:'vasu'},{opt:'jash'},{opt:'yash'}].map((item) => (
          <Button onClick={() => ansCheck({select : item.opt})}>{item.opt}</Button>
        ))}
      </Card>
      <p className={classes.score}>Your Score : 00</p>
      <div className={classes.box_2}>
        <p>Banner Add</p>
      </div>
    </div>
  );
};
export default QuizStarted;
