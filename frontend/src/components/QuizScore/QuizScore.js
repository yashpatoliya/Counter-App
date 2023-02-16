import './QuizScore.css';

const QuizScore = () => {
    return(
        <>
         <div className="book_image">
            <img src="../../assets/cardicon.svg" alt="img"/>
            <p>English Grammar</p>
            <h3>Time’s up, well played!</h3>
            <h6>Winner announcement: 03:30 PM</h6>
        </div>
        <div className="box">
            <img src="../../assets/pngwing 1.png" alt="img"/>
            <div>
            <p>Your current score is</p>
            <h1>100</h1>
            </div>
        </div>
        <div className="winner_rank d-flex">
            <div className="about_w">
                <h4>200</h4>
                <p>Current <br/>
                Rank</p>
                
            </div>
            <div className="line"></div>
            <div className="about_w">
                <h4>5</h4>
                <p>Correct
                <br/>Answer</p>
            </div>
            <div className="line"></div>
            <div className="about_w">
                <h4>200</h4>
                <p> Wrong
                <br/>Answer</p>
            </div>
            
        </div>
        </>
    )
};

export default QuizScore;