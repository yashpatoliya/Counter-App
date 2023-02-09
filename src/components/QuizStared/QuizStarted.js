import ReactStopwatch from "react-stopwatch";
import classes from "./QuizStarted.module.css";
// import { useParams } from 'react-router-dom';
import Card from "../UI/BlurCard/Card";
import { Button } from "../UI/Button/Button";
import { useEffect, useState } from "react";
import { redirect, Router } from "react-router-dom";

const QuizStarted = (props) => {
  const [seconds, setSeconds] = useState(5);

  const timer = setInterval(() => {
    if(seconds===0){
        alert('finish')
        
        props.history.push('/')
    }else{
        setSeconds(seconds - 1);
    }
  }, 1000);
  if(seconds == 0){
    clearInterval(timer)
    return Router.push('/');
  }
  

  return (
    <div className={classes.quiz}>
      <div className={classes.book_image}>
        <img src="assets/Card-icon.svg" alt="image" />
      </div>
      <p className={classes.title}>English Grammar</p>
      <Card>
        <p className={classes.circle}>
          <h6>{seconds}</h6>
          <span>Sec Left</span>
        </p>
        <p className={classes.question}>What is related to the earthquake?</p>
        <Button>Weighing Scale</Button>
        <Button>Richter Scale</Button>
        <Button>Matric Scale</Button>
      </Card>
      <p className={classes.score}>Your Score : 00</p>
      <div className={classes.box_2}>
        <p>Banner Add</p>
      </div>
    </div>
  );
};

export default QuizStarted;
