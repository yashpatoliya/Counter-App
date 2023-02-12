import { useSelector } from "react-redux";
import classes from './History.module.css'

const History = () => {
    const quiz = useSelector((state) => state.quiz.history);
    console.log(quiz)
    return(
        <div className={classes.card}>
            <div className={classes.cardicon}>
                <img src='../../assets/cardicon.svg' />
            </div>
            <div className={classes.cardbody}>
                <h4>English Grammar</h4>
                <div className={classes.description}>
                    <label>Earnd</label>
                    <p>February 4th 2023</p>
                </div>
            </div>
            <div className={classes.coins}><img src='../assets/coin.png' /><span>10,000</span></div>
        </div>
    )
};

export default History;