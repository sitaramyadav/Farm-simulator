import React from 'react';
import ReactDOM from "react-dom";
import {createStore, compose} from 'redux';
import reducers from './reducers'
import Main from "./Main/containers/main";
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import { install, Cmd, loop } from "redux-loop";

const initialState = {};

export let store = createStore(reducers, initialState,  compose(
    install(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
const history = createBrowserHistory();

const routing = (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <Route path="/" component={Main} />
            </div>
        </Provider>
    </Router>
);

ReactDOM.render(routing, document.getElementById('content'));



