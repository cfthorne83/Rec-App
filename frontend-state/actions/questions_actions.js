import { createAction } from "@reduxjs/toolkit";

const receiveQuestions = createAction('RECEIVE_QUESTIONS');
const receiveQuestion = createAction('RECEIVE_QUESTION');
const deleteQuestion = createAction('DELETE_QUESTIONS');

const fetchQuestions = () => dispatch => {
    return //apirequest.then( questions => {
        // return dispatch(receiveQuestions(questions))
    // })
};

const submitQuestion = () => {

};

const deleteQuestion = () => {

};