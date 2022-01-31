import { createReducer, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { QuestionsReducer } from "../reducers/questions_reducer";

export const configureAppStore = () => {
    const store = configureStore({
        reducers: QuestionsReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
            .concat(process.env.NONE_ENV !== 'development' ? logger : []),
        preloadedState: preloadedState
    });
    return store;
}