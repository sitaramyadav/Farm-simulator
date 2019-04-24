import React from "react";
import ReactDOM from "react-dom";
import App from  "./Components/App";
import {createStore} from 'redux';
import reducers from './reducer.js';
import {Provider} from "react-redux";

const store = createStore(reducers);

const app = (
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>
);

ReactDOM.render(app, document.getElementById("content"));