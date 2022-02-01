import { createAction } from "@reduxjs/toolkit";
import "regenerator-runtime/runtime";

const receiveQuestions = createAction('RECEIVE_QUESTIONS');
const receiveQuestion = createAction('RECEIVE_QUESTION');
const removeQuestion = createAction('DELETE_QUESTION');

export const fetchQuestions = () => async dispatch => {
    try {
        dispatch(receiveQuestions(res.data));
    } catch(err) {
        console.log(err);
    }
};

export const submitQuestion = question => async dispatch => {
    try {
        let res.data = question;
        dispatch(receiveQuestion(res.data))
    } catch(err) {
        console.log(err)
    }
};

export const deleteQuestion = _id => async dispatch => {
    try {
        let res.data = _id;
        dispatch(removeQuestion(res.data))
    } catch(err) {
        console.log(err)
    }

};