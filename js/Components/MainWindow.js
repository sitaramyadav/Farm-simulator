import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Sun} from "./Sun";
import {Sky} from "./Sky";

export class MainWindow extends Component {
    render() {
        return <div className="Main-window ">
            <Sky/>
            <Sun/>
        </div>;
    }
}