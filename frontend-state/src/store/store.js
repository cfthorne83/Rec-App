import { createReducer, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// window.process = {
//     env: {
//         NODE_ENV: 'development'
//     }
// };

let initialState = {
    questions: {}
};

const questionsReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_QUESTIONS', (state, action) => {
            let questions = {};
            action.payload.data.map(question => {
                questions[question._id] = question;
            })
            state.questions = questions;
        })
        .addCase('RECEIVE_QUESTION', (state, action) => {
            state.questions[action.payload._id] = action.payload;
        })
        .addCase('DELETE_QUESTION', (state, action) => {
            delete state.questions[action.payload]
        })
});

export const configureAppStore = (preloadedState) => {
    const store = configureStore({
        reducer: questionsReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
            .concat(process.env.NODE_ENV !== 'production' ? logger : []),
        preloadedState: preloadedState
    });
    return store;
};