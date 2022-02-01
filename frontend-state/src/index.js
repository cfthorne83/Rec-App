import React from "react";
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {configureAppStore} from './store/store';


document.addEventListener('DOMContentLoaded', () => {

    const preloadedState = {
        questions: {
            1: { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
            2: { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach'},
            3: { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?'},
        },
    }

    const store = configureAppStore(preloadedState);

    ReactDOM.render( <App store={store}/>, document.getElementById('root'))
});