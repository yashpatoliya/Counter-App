
import  Tabs  from "../UI/Tabs/tabs";
import { Button } from "../UI/Button/Button";
import { Link } from "react-router-dom";

const Error = () => {
    const title = {
        textAlign : 'center'
    }

    return(
        <div>
           <h2 style={title}> Our Games </h2>
           <Tabs/>
            <Link to="/"><Button>Go Back</Button></Link>
        </div>
    )
};

export default Error;