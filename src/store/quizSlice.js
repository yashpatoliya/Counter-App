import { createSlice } from '@reduxjs/toolkit';


const quizSlice = createSlice({
  name: 'quizes',
  initialState: {
    quizes: [
      {
        id: '01',
        name: "English Grammar",
        img: '../assets/cardicon.svg',
        entry: 50,
        live: true,
        title: 'Play and Win 200,000',
        announce: '03:00 PM',
        userplaying: 588,
        score: 0,
        result: {
          trueAns: 0,
          falseAns: 0
        },
        questions: [
          {
            question: "What is related to the earthquake?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
          {
            question: "What is related to the second?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
          {
            question: "What is related to the third?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
        ],
      },
      {
        id: '02',
        name: "English Spelling",
        img: '../assets/cardicon.svg',
        entry: 100,
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
            question: "What is related to the earthquake?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
          {
            question: "What is related to the second?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
          {
            question: "What is related to the third?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
        ],
      },
    ],
    currectQuiz: {
      quiz: {
        id: '01',
        name: "English Grammar",
        img: '../assets/cardicon.svg',
        entry: 50,
        live: true,
        title: 'Play and Win 200,000',
        announce: '03:00 PM',
        userplaying: 588,
        score: 0,
        result: {
          trueAns: 0,
          falseAns: 0
        },
        questions: [
          {
            question: "What is related to the earthquake?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
          {
            question: "What is related to the second?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
          {
            question: "What is related to the third?",
            options: [
              {
                opt: "Weighing Scale",
              },
              {
                opt: "Richter Scale",
              },
              {
                opt: "Matric Scale",
              },
            ],
            answer: "Richter Scale",
          },
        ],
      },
      question: {
        question: "What is related to the earthquake?",
        options: [
          {
            opt: "Weighing Scale",
          },
          {
            opt: "Richter Scale",
          },
          {
            opt: "Matric Scale",
          },
        ],
        answer: "Richter Scale",
      },
    }
  },
  reducers: {
    playQuize: (state, action) => {
      let id = action.payload.id;
      for (let i in state.quizes) {
        if (state.quizes == id) {
          let obj = { ...state.quizes[i] };
          state.currectQuiz.quiz = { ...obj };
          let curquestion = state.currectQuiz.quiz.questions[0]
          state.currectQuiz.question = { ...curquestion };
        }
      }
    }
  }
})

export const quizAction = quizSlice.actions;

export default quizSlice;