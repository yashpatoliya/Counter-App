import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quizes',
    initialState: {
      quizes: [],
      
    },
    reducers:{
        
    }
})

export const quizAction = quizSlice.actions;

export default quizSlice;