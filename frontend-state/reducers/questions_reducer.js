import { createReducer } from "@reduxjs/toolkit";

let initialState = {};

export const QuestionsReducer = createReducer(initialState, builder => {
    builder
        .addCase(receiveQuestions, (state, action) => {
            state.payload;
        })
        .addCase(receiveQuestion, (state, action) => {
            state[payload._id] = paylaod;
        })
        .addCase(deleteQuestion, (state, action) => {
            delete state[payload._id]
        })
});