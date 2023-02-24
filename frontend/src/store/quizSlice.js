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
        win : 1000,
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
        win : 2000,
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
          },{
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
    ],
    currentQuiz: {
      quiz: {},
      question: {},
    },
    history: [],
  },
  reducers: {
    playQuize: (state, action) => {
      let quizId = action.payload.id;
      let fatched = state.quizes;
      for (let i in fatched) {
        if (fatched[i].id == quizId) {
          let obj =  { ...fatched[i] }
          state.currentQuiz.quiz = {...obj}
          state.currentQuiz.question = state.currentQuiz.quiz.questions[0];
        }
      }

    },
    //number, ans
    NextQuestion(state, action) {
      let obj = action.payload;
      let number = obj.number + 1;
      if (state.currentQuiz.quiz.questions.length >= obj.number) {
        if (obj.ans) {
          state.currentQuiz.quiz.score += 50;
          state.currentQuiz.quiz.result.trueAns += 1;
        } else {
          state.currentQuiz.quiz.score -= 20;
          state.currentQuiz.quiz.result.falseAns += 1;
        }
        let allquestions = state.currentQuiz.quiz.questions;
        allquestions.map(item => {
          if (item.number === number) {
            state.currentQuiz.question = item;
            return true;
          }
        })
      } else {
        alert('finished quiz');
      }
    },

    //add history
    AddHistory(state, action){
      let obj = { ...state.currentQuiz.quiz, date : action.payload.date , }
      state.history.push(obj);
    }
  }
})

export const quizActions = quizSlice.actions;

export default quizSlice;