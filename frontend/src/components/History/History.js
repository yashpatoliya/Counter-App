import { useSelector } from "react-redux";
import classes from "./History.module.css";

const History = () => {
  const history = useSelector((state) => state.quiz.history);

  const quiz = useSelector((state) => state.quiz.history);
  console.log(quiz);
  return (
    <div>
      {history.map((item) => (
        <div className={classes.card}>
          <div className={classes.cardicon}>
            <img src="../../assets/cardicon.svg" />
          </div>
          <div className={classes.cardbody}>
            <h4>{item.name}</h4>
            <div className={classes.description}>
              <label className="earnd">Earnd</label>
              <p>February 4th 2023</p>
            </div>
          </div>
          <div className={classes.coins}>
            <img src="../assets/coin.png" />
            <span>{item.win}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
