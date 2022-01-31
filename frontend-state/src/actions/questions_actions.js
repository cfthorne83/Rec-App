import { createAction } from "@reduxjs/toolkit";

const receiveQuestions = createAction('RECEIVE_QUESTIONS');
const receiveQuestion = createAction('RECEIVE_QUESTION');
const removeQuestion = createAction('DELETE_QUESTION');

export const fetchQuestions = () => async dispatch => {
    try {
        dispatch(receiveQuestion(res));
    } catch(err) {
        console.log(err);
    }
};

export const submitQuestion = () => async dispatch => {
    try {
        dispatch(receiveQuestion(res))
    } catch(err) {
        console.log(err)
    }
};

export const deleteQuestion = () => {
    try {
        dispatch(removeQuestion(res))
    } catch(err) {
        console.log(err)
    }

};