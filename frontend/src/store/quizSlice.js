import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quizes',
  initialState: {
    quizes: [
     
    ],
    currentQuiz: {
      quiz: {},
      question: {},
    },
    history: [],
  },
  reducers: {
    playQuize: (state, action) => {
        console.log(action.payload)
          let obj =  { ...action.payload }
          state.currentQuiz.quiz = {...obj}
          state.currentQuiz.question = state.currentQuiz.quiz.questions[0];
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