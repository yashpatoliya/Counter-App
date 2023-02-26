import { createSlice } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        history: [],
        totalscore: 200,
    },
    reducers: {
        //add history
        AddHistory(state, action) {
            console.log(action.payload)
            let obj = { ...action.payload.quiz, date: action.payload.date, }
            state.history.push(obj);
            console.log(state.history)
        },
        EntryCoinsHandler(state, action) {
            state.totalscore = state.totalscore - action.payload.entry;
            console.log(state.totalscore)
        },
        WinCoinHandler(state, action) {
            let score = action.payload.score ? action.payload.score : 0;
            state.totalscore = state.totalscore + score
        }
    }
})

export const scoreActions = scoreSlice.actions;

export default scoreSlice;