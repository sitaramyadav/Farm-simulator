import React from 'react';
import {MainWindow} from '../../MainWindow/components/MainWindow.js';
import '../../CSS/App.css';
import {ButtonPane} from "../../ButtonPane/components/ButtonPane";

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            day: true,
            cloudy: false,
            drySoil:true,
            waterLevel:50,
            waterPump: false
        };
     this.update = this.update.bind(this);

    }

    update(property, value) {
        this.setState(()=>{
            return {
                [property]: value
            }
        })
    }

    render() {
        return (
            <div>
                <MainWindow props={this.state}/>
                <ButtonPane update={this.update}/>
            </div>
        );
    }
}