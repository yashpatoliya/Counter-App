import classes from './ButtonOutline.module.css';

const ButtonFilled = (props) => {
    return (
        <button
            class={classes.buttonOutline}
            type={props.type ? props.type : 'button'}
        >
            {props.children}
        </button>
    )
}

export default ButtonFilled;