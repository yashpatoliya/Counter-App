// import toggle from './assets/toggle.png';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import assets from '../../assets';

function SideMenu() {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <>
      <Button className={classes.toggle} onClick={toggle}>
        <img src="assets/toggle.png" />
      </Button>

      {show && (
        <div className={classes.bgbox}>
          <div className={classes.side}>
            <div className={classes.profile}>
              <button onClick={toggle} className={classes.close}>
                <img src="assets/toggle.png" alt="Images" />
              </button>
              <img
                src="assets/Ellipse 4.svg"
                alt="Images"
                className={classes.profileImg}
              />
              <p className={classes.welcome}>Welcome!</p>
              <p className={classes.play}>play Quiz & earn coins</p>
            </div>
            <div className={classes.boxWhite}>
              <ul>
                <li>
                  <Link to="/side/quiz-rules">
                    <img src="assets/Frame.svg" alt="Images" /> Quiz Rules
                  </Link>
                </li>
                <li>
                  <Link to="/side/history">
                    <img src="assets/Frame.svg" alt="Images" /> Coins History
                  </Link>
                </li>
                <li>
                  <Link to="/side/partnerus">
                    <img src="assets/Frame.svg" alt="Images" /> Partner US
                  </Link>
                </li>
                <li>
                  <Link to="/side/terms">
                    <img src="assets/Frame.svg" alt="Images" /> Terms and
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/side/policy">
                    <img src="assets/Frame.svg" alt="Images" /> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/side/contact">
                    <img src="assets/Frame.svg" alt="Images" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <img src="assets/Frame.svg" alt="Images" /> Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const BackButton = () => {
  return (
    <Link to="..">
      <Button className={classes.toggle} >
        <img src="assets/back.svg" />
      </Button>
    </Link>
  );
};

const MainNavigation = ({ start, title }) => {
  return (
    <header className={classes.header}>
      {!start && <SideMenu />}
      {start && <BackButton />}
      <h3 className={classes.title}>
        {!start && <img src="assets/logo.png" width="80%" />}
        {start && title}
      </h3>

      <div className={classes.score}>
        <img src="assets/scoin.png" />
        <span>200</span>Coins
      </div>
    </header>
  );
};

export default MainNavigation;
