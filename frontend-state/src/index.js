import React from "react";
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {configureAppStore} from './store/store';


document.addEventListener('DOMContentLoaded', () => {

    const preloadedState = {};

    const store = configureAppStore(preloadedState);

    ReactDOM.render( <App store={store}/>, document.getElementById('root'))
});