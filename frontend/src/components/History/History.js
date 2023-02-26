import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./History.module.css";

const History = () => {
  const history = useSelector((state) => state.store.history);

  return (
    <div>
      {history.map((item) => (
        <>
        
        <div className={classes.card}>
          <div className={classes.cardicon}>
            <img src="../../assets/cardicon.svg" />
          </div>
          <div className={classes.cardbody}>
            <h4>{item.name}</h4>
            <div className={classes.description}>
              <label className={item.result.trueAns > item.result.falseAns ? classes.earnd : classes.paid}>{item.result.trueAns > item.result.falseAns ? "Earnd" : "Paid"}</label>
              <p>{item.date}</p>
            </div>
          </div>
          <div className={classes.coins}>
            <img src="../assets/coin.png" />
            <span>{item.win}</span>
          </div>
        </div>
        </>
      ))}
    </div>
  );
};

export default History;
