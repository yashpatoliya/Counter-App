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
          falseAns: 0,
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
    currentQuiz: {
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
      question: {
        number: 1,
        title: "What is related to the earthquake?",
        options: [
          {
            value: "Weighing Scale",
            isCorrect: true,
          },
          {
            value: "Richter Scale",
            isCorrect: false,
          },
          {
            value: "Matric Scale",
            isCorrect: false,
          },
        ],
      },
    },
    history: [],
  },
  reducers: {
    playQuize: (state, action) => {
      let id = action.payload.id;
      for (let i in state.quizes) {
        if (state.quizes === id) {
          let obj = { ...state.quizes[i] };
          state.currentQuiz.quiz = { ...obj };
          let curquestion = state.currentQuiz.quiz.questions[0]
          state.currentQuiz.question = { ...curquestion, number: 1 };
          console.log(state.currentQuiz.quiz);
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
      console.log(state.history)
    }
  }
})

export const quizActions = quizSlice.actions;

export default quizSlice;