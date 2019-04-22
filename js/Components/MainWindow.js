import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Sky} from "./Sky";
import {Farm} from "./Farm";
import { Grass } from "./Grass";
import {Moon} from "./Moon";
import {Stars} from "./Stars";
import {Sun} from "./Sun";

export class MainWindow extends Component {
    render() {
        return <div className="Main-window ">
            <Sky/>
            <Sun/>
            <Farm/>
            <Grass />
            {/*<Sun/>*/}
            <Moon/>
            <Stars/>
        </div>;
    }
}