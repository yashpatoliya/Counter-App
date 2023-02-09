import Ads from "../UI/Ads/Ads";
import Card from "../UI/BlurCard/Card";
import { ButtonOrange } from "../UI/Button/Button";
import classes from "./policy.module.css";
const Policy = () => {
  return (
    <main>
      <Ads />
      <Card>
        <img src="../assets/coins-lots.png" />
        <h2 className={classes.title}>Well Played!</h2>
        <h3 className={classes.miniTitle}>
          You have got <span> 200 coins</span>
        </h3>
        <p className={classes.discription}>
          Play more quizzes to test your knowledge and to continue earning more
          coins
        </p>
        <ButtonOrange>Play Now</ButtonOrange>
      </Card>
      <ul className={classes.ul}>
        <li>Over 40 million quiz enthusiasts have played with us</li>
        <li>We are India's favorite Quiz destination</li>
        <li>We are India's favorite Quiz destination</li>
        <li>
          We offer quizzes in over 25 categories like GK, sports, bollywood,
          geography, business, histony, IPL & more
        </li>
        <li>Played & trusted by over 40 million users</li>
      </ul>
      <img src="assets/logo.png" className={classes.logo} />
      <h4 className={classes.logodiscription}>
        Play Quizzes and win <img src="../assets/india.png" />
      </h4>
    </main>
  );
};
export default Policy;
