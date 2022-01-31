import { createReducer } from "@reduxjs/toolkit";

let initialState = {
    questions: {}
};

export const QuestionsReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_QUESTIONS', (state, action) => {
            action.payload;
        })
        .addCase('RECEIVE_QUESTION', (state, action) => {
            state.questions[action.payload._id] = action.payload;
        })
        .addCase('DELETE_QUESTION', (state, action) => {
            delete state.questions[action.payload]
        })
});