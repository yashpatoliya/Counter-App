import { createSlice } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
    name: 'score',
    initialState: {
      items: [],
      totalscore: 200,
    },
    reducers:{
        addHistory(state, action){
            let obj = {
                quiz : action.payload.name,
                entry : action.payload.entry,
                totalscore : action.payload.score,
                date: Date.now(),
            };
            state.items.push(obj);
            state.totalscore = action.payload.totalscore;
        },
        EntryCoinsHandler(state, action){
            state.totalscore = state.totalscore - action.payload.entry;
            console.log(state.totalscore)
        },
        WinCoinHandler(state, action){
            let score = action.payload.score ? action.payload.score : 0;
            state.totalscore = state.totalscore + score
        }   
    }
})

export const scoreActions = scoreSlice.actions;

export default scoreSlice;