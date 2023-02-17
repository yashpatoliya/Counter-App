import classes from "./Button.module.css";

export const ButtonOrange = (props) => {
  return (
    <button
    className={classes.buttonOrange}
      type={props.type ? props.type : "button"}
      {...props}
    >
      {props.children}
    </button>
  );
};

export const ButtonOrangeOutline = (props) => {
  return (
    <button
    className={classes.buttonOutline}
      type={props.type ? props.type : "button"}
      {...props}
    >
      {props.children}
    </button>
  );
};

export const ButtonOutline = (props) => {
  return (
    <button
    className={classes.buttonFilled}
      type={props.type ? props.type : "button"}
      {...props}
    >
      {props.children}
    </button>
  );
};

export const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type ? props.type : "button"}
      {...props}
    >
         {props.children}
    </button>
  );
};
