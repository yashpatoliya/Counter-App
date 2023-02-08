// import toggle from './assets/toggle.png';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

function SideMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={classes.toggle} onClick={handleShow}>
        <img src="assets/toggle.png" />
      </Button>

      <Offcanvas className={classes.offcanvas} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton="">
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
const BackButton = () => {
  return (
    <Link to='..'>
      <Button className={classes.toggle}>
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
