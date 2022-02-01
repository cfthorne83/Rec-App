import { createAction } from "@reduxjs/toolkit";
import "regenerator-runtime/runtime";
import axios from "axios";

const receiveQuestions = createAction('RECEIVE_QUESTIONS');
const receiveQuestion = createAction('RECEIVE_QUESTION');
const removeQuestion = createAction('DELETE_QUESTION');

export const fetchQuestions = () => async dispatch => {
    try {
        let res = await axios.get('http://localhost:8080/api/questions');
        dispatch(receiveQuestions(res.data));
    } catch(err) {
        console.log(err);
    }
};

export const submitQuestion = question => async dispatch => {
    try {
        let res = question;
        dispatch(receiveQuestion(res.data))
    } catch(err) {
        console.log(err)
    }
};

export const deleteQuestion = _id => async dispatch => {
    try {
        let res = _id;
        dispatch(removeQuestion(res.data))
    } catch(err) {
        console.log(err)
    }

};