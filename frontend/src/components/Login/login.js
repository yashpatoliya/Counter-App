import { NavLink } from "react-router-dom";
import classes from "./login.module.css";
import { Button } from "../UI/Button/Button";
// import { GoogleLogin } from 'react-google-login';
import { useEffect } from "react";

const Login = () => {

  // function HandelCallbackResponse(response) {
  //   console.log(response)
  // }

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     clientId: '157667866522-u5tv9pg4qci97624lmhmeirdlkbjkler.apps.googleusercontent.com',
  //     callback: HandelCallbackResponse,
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById('signInId'),
  //   )
  // }, [])


  return (
    <>
      <h2 className={classes.title}>Join Now & Play Quiz</h2>
      <h4 className={classes.discription}>
        Play Quizzes and win <img src="assets/potli.png" />
      </h4>
      {/* 
      </Button> */}
      {/* <GoogleLogin
  clientId="157667866522-u5tv9pg4qci97624lmhmeirdlkbjkler.apps.googleusercontent.com"
  buttonText="Sign in with Google"
  onSuccess={handleGoogleLoginSuccess}
  cookiePolicy={'single_host_origin'} */}
      {/* /> */}

      {/* <button className="g-signin2" data-onsuccess="onSignIn">ṣign in with google</button> */}
      <Button className="g-signin2" id="signInId">
        <img src="assets/googlelogo.svg" />
        Continue with Google
        </Button>
        <Button>
          <img src="assets/fblogo.svg" />
          Continue with Facebook
        </Button>
        <h5 className={classes.policy}>
          <NavLink to="/policy">Privacy Policy & Terms of use</NavLink>
        </h5>
        <div className={classes.skip}>
          <NavLink to="/">Skip Login</NavLink>
        </div>
        <h3 className={classes.yellow}>Test your knowledge instantly!</h3>
        <ul className={classes.ul}>
          <li>
            Play quizzes in over 25 categories like GK, sports, bollywood,
            geography, business, history, IPL & more
          </li>
          <li>Compete with thousands of other quiz enthusiasts</li>
          <li>Collect Qureka Lite coins in every quiz</li>
          <li>Played & trusted by over 40 million users</li>
        </ul>
        <img src="assets/logo.png" className={classes.logo} />
        <h4 className={classes.logodiscription}>
          Play Quizzes and win <img src="assets/india.png" />
        </h4>
      </>
    );
};

      export default Login;
