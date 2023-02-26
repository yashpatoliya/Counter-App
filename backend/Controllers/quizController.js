
const quizes = [
    {
        id: '01',
        name: "English Grammar",
        img: '../assets/cardicon.svg',
        entry: 50,
        win: 1000,
        live: true,
        title: 'Play and Win 200,000',
        announce: '03:00 PM',
        userplaying: 588,
        score: 0,
        result: {
            trueAns: 0,
            falseAns: 0,
        },
        questions: [
            {
                number: 1,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: true,
                    },
                    {
                        value: "Richter Scale", isCorrect: false,
                    },
                    {
                        value: "Matric Scale", isCorrect: false,
                    },
                ],
            },
            {
                number: 2,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: false,
                    },
                    {
                        value: "Richter Scale", isCorrect: true,
                    },
                    {
                        value: "Matric Scale", isCorrect: false,
                    },
                ],
            },
            {
                number: 3,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: false,
                    },
                    {
                        value: "Richter Scale", isCorrect: false,
                    },
                    {
                        value: "Matric Scale", isCorrect: true,
                    },
                ],
            },
        ],
    },
    {
        id: '02',
        name: "English Spelling",
        img: '../assets/cardicon.svg',
        entry: 100,
        win: 2000,
        live: false,
        title: 'Play and Win 100,000',
        announce: '05:00 PM',
        userplaying: 58,
        score: 0,
        result: {
            trueAns: 0,
            falseAns: 0
        },
        questions: [
            {
                number: 1,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: true,
                    },
                    {
                        value: "Richter Scale", isCorrect: false,
                    },
                    {
                        value: "Matric Scale", isCorrect: false,
                    },
                ],
            },
            {
                number: 2,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: false,
                    },
                    {
                        value: "Richter Scale", isCorrect: true,
                    },
                    {
                        value: "Matric Scale", isCorrect: false,
                    },
                ],
            },
            {
                number: 3,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: false,
                    },
                    {
                        value: "Richter Scale", isCorrect: false,
                    },
                    {
                        value: "Matric Scale", isCorrect: true,
                    },
                ],
            }, {
                number: 4,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: true,
                    },
                    {
                        value: "Richter Scale", isCorrect: false,
                    },
                    {
                        value: "Matric Scale", isCorrect: false,
                    },
                ],
            },
            {
                number: 5,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: false,
                    },
                    {
                        value: "Richter Scale", isCorrect: true,
                    },
                    {
                        value: "Matric Scale", isCorrect: false,
                    },
                ],
            },
            {
                number: 6,
                title: "What is related to the earthquake?",
                options: [
                    {
                        value: "Weighing Scale", isCorrect: false,
                    },
                    {
                        value: "Richter Scale", isCorrect: false,
                    },
                    {
                        value: "Matric Scale", isCorrect: true,
                    },
                ],
            },
        ],
    },
];

const index = async (req, res) => {
    let data = await quizes;
    return res.json({ status: 200, response: [...data] })
};

const oneQuiz = async (req, res) => {
    let quizId = await req.params.id;
    let data = await quizes.filter((item) =>(item.id === quizId));

    return res.json({ status: 200, response: { ...data[0] } })
}

module.exports = { index, oneQuiz };