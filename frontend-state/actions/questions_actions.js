import { createAction } from "@reduxjs/toolkit";

const receiveQuestions = createAction('RECEIVE_QUESTIONS');
const receiveQuestion = createAction('RECEIVE_QUESTION');
const deleteQuestion = createAction('DELETE_QUESTION');

export const fetchQuestions = () => async dispatch => {
    try {
        // dispatch(receiveQuestion);
    } catch(err) {
        console.log(err);
    }
};

export const submitQuestion = () => async dispatch => {
    try {
        // dispatch(receiveQuestion)
    } catch(err) {
        console.log(err)
    }
};

export const deleteQuestion = () => {
    try {
        // dispatch(deleteQuestion)
    } catch(err) {
        console.log(err)
    }

};