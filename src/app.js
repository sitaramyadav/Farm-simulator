import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import reducers from './reducers'
import Main from "./Main/containers/main";
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";


export let store = createStore(reducers);

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




