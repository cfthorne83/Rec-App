import React, {useState} from "react";
import {Questions} from './Questions';
import {QuestionsForm} from './QuestionForm';

export const App = () => {
    //establish state
    const [questions, setQuestions] = useState([
        { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
        { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach'},
        { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?'},
    ]);

    const submitQuestion = (newquestion) => {
        setQuestions(...questions, newquestion)
    }

    const deleteQuestion = (_id) => {
        setQuestions(questions.filter( question => question._id !== _id))
    }

    
    return (
        <>
            <QuestionsForm/>
            <Questions questions={questions} deleteQuestion={deleteQuestion}/>
        </>
    )
};