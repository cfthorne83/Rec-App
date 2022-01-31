import React, {useState} from "react";
import Questions from './Questions';
import QuestionsForm from './QuestionForm';
import { Provider } from "react-redux";
import './css_reset.css'
import './index.css'

export const App = ({store}) => {
    
    return (
        <Provider store={store} >
            <div className="App">
                <header>RecApp 2.0 | Frontend: State</header>
                <QuestionsForm />
                <Questions />
            </div>
        </Provider>
    )
};