import { createAction } from "@reduxjs/toolkit";
import "regenerator-runtime/runtime";

const receiveQuestions = createAction('RECEIVE_QUESTIONS');
const receiveQuestion = createAction('RECEIVE_QUESTION');
const removeQuestion = createAction('DELETE_QUESTION');

export const fetchQuestions = () => async dispatch => {
    try {
        dispatch(receiveQuestions(res));
    } catch(err) {
        console.log(err);
    }
};

export const submitQuestion = question => async dispatch => {
    try {
        let res = question;
        dispatch(receiveQuestion(res))
    } catch(err) {
        console.log(err)
    }
};

export const deleteQuestion = _id => async dispatch => {
    try {
        let res = _id;
        dispatch(removeQuestion(res))
    } catch(err) {
        console.log(err)
    }

};