import Card from "../UI/Card/card";
import classes from './QuizCard.module.css';
// import CardIcon from '../../assets/Card-icon.svg';
// import coin from '../../assets/coin.png';
import Button from '../UI/Button/ButtonOutline'
const QuizCard = (props) => {

    const CardHeder = (
        <>
            <h5>Entry:{props.entry}</h5>
            <badge className={classes.badge}>{props.live ? <ul><li>Live</li></ul> : ''}</badge>
        </>
    )

    const CardBody = (
        <>
        <div className={classes.imgIcon}>
            <img src={props.img} alt="Card Image"/>
        </div>
        <div className={classes.content}>
            <h5>{props.quiz}</h5>
            <h3>{props.title} <img src='assets/coin.png' alt="coin"/></h3>
            <small>Winner announcement: {props.announce}</small>
        </div>
        </>
    )

    const CardFooter = (
        <>
            <h5>{props.userplaying} <span>Users Playing</span></h5>
            <Button>Play Now</Button>
        </>
    )


    return (
        <Card>
            <div className={classes.cardheader}>
                {CardHeder}
            </div>
            <div className={classes.cardbody}>
                {CardBody}
            </div>
            <div className={classes.cardfooter}>
                {CardFooter}
            </div>

        </Card>
    )
}
export default QuizCard;