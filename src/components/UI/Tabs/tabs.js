import { useState } from "react";
import "./tabs.css";
import QuizCard from "../../QuizCard/QuizCard";
import { useSelector } from "react-redux";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const QUIZ = useSelector((state) => state.quiz.quizes);


    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Quiz
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    IPL/Cricket
                </button>

            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    {
                        QUIZ.map((item) =>
                            <QuizCard
                                key={item.id}
                                id={item.id}
                                entry={item.entry}
                                live={item.live}
                                img={item.img}
                                quiz={item.quiz}
                                title={item.title}
                                announce={item.announce}
                                userplaying={item.userplaying}
                            />
                        )
                    }
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>IPL Cricket Contest</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;