import React from "react";
import ReactDOM from "react-dom";
import {index} from  "./Components/App";
import {MainWindow} from "./Components/MainWindow";
import {ButtonPane} from "./Components/ButtonPane";

ReactDOM.render(<div className='App'>
    <MainWindow/>
    <ButtonPane/>
    </div>
, document.getElementById("content"));