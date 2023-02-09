import Card from "../UI/Card/card";
import classes from "./QuizCard.module.css";
import { Link } from "react-router-dom";
import {ButtonOrangeOutline as Button} from "../UI/Button/Button";
const QuizCard = (props) => {
  const CardHeder = (
    <>
      <h5>Entry:{props.entry}</h5>
      <badge className={classes.badge}>
        {props.live ? (
          <ul>
            <li>Live</li>
          </ul>
        ) : (
          ""
        )}
      </badge>
    </>
  );

  const CardBody = (
    <>
      <div className={classes.imgIcon}>
        <img src={props.img} alt="Card Image" />
      </div>
      <div className={classes.content}>
        <h5>{props.quiz}</h5>
        <h4>
          {props.title} <img src="../assets/coin.png" alt="coin" />
        </h4>
        <small>Winner announcement: {props.announce}</small>
      </div>
    </>
  );

  const CardFooter = (
    <>
      <h5>
        {props.userplaying} <span>Users Playing</span>
      </h5>
      <Link to={`/quiz/${props.id}`}>
        <Button>Play Now</Button>
      </Link>
    </>
  );

  return (
    <Card>
      <div className={classes.cardheader}>{CardHeder}</div>
      <div className={classes.cardbody}>{CardBody}</div>
      <div className={classes.cardfooter}>{CardFooter}</div>
    </Card>
  );
};
export default QuizCard;
