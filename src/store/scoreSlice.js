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
        }
    }
})

export const scoreActions = scoreSlice.actions;

export default scoreSlice;