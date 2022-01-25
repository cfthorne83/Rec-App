import React, {useState} from "react";
import {Questions} from './Questions';
import {QuestionsForm} from './QuestionForm';

export const App = () => {
    //establish state
    const [GLOBAL_STATE, setState] = useState({

        questions: {
            1: { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
            2: { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach'},
            3: { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?'},
        },
        ui: {
            isDarkMode: false,
            isLoading: false
        },
        answers: {},
        submitQuestion: (newquestion) => {
            const NEW_STATE = {...GLOBAL_STATE};
            NEW_STATE.questions[newquestion._id] = newquestion;
            setState(NEW_STATE);
        },
        deleteQuestion: (_id) => {
            const NEW_STATE = {...GLOBAL_STATE};
            delete NEW_STATE.questions[_id];
            setState(NEW_STATE);
        },
    });
    
    return (
        <>
            <QuestionsForm GLOBAL_STATE={GLOBAL_STATE} />
            <Questions GLOBAL_STATE={GLOBAL_STATE} />
        </>
    )
};