import { useEffect, useState } from "react";
import "./tabs.css";
import QuizCard from "../../QuizCard/QuizCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const QUIZ = useLoaderData();
    // const QUIZ = [
    //     {
    //         id: '01',
    //         name: "English Grammar",
    //         img: '../assets/cardicon.svg',
    //         entry: 50,
    //         win: 1000,
    //         live: true,
    //         title: 'Play and Win 200,000',
    //         announce: '03:00 PM',
    //         userplaying: 588,
    //         score: 0,
    //         result: {
    //             trueAns: 0,
    //             falseAns: 0,
    //         },
    //         questions: [
    //             {
    //                 number: 1,
    //                 title: "What is related to the earthquake?",
    //                 options: [
    //                     {
    //                         value: "Weighing Scale", isCorrect: true,
    //                     },
    //                     {
    //                         value: "Richter Scale", isCorrect: false,
    //                     },
    //                     {
    //                         value: "Matric Scale", isCorrect: false,
    //                     },
    //                 ],
    //             },
    //             {
    //                 number: 2,
    //                 title: "What is related to the earthquake?",
    //                 options: [
    //                     {
    //                         value: "Weighing Scale", isCorrect: false,
    //                     },
    //                     {
    //                         value: "Richter Scale", isCorrect: true,
    //                     },
    //                     {
    //                         value: "Matric Scale", isCorrect: false,
    //                     },
    //                 ],
    //             },
    //             {
    //                 number: 3,
    //                 title: "What is related to the earthquake?",
    //                 options: [
    //                     {
    //                         value: "Weighing Scale", isCorrect: false,
    //                     },
    //                     {
    //                         value: "Richter Scale", isCorrect: false,
    //                     },
    //                     {
    //                         value: "Matric Scale", isCorrect: true,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ]

 
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
            </div>
        </div>
    );
}

export default Tabs;