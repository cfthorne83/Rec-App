import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

const QuestionsReducder = createReducer(initialState, (builder) => {

    builder
        .addCase('RECEIVE_QUESTIONS', (state, action) => {
            state.questions = payload;
        })
        .addCase('RECEIVE_QUESTION', (state, action) => {
            state.questions[payload.id] = payload;
        })
})