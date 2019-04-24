import React, {Component} from 'react';
import './../CSS/App.css';
import {MainWindow} from "./MainWindow";
import {ButtonPane} from "./ButtonPane";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: true,
            cloudy: false,
            drySoil:true,
            waterLevel:80
        }
        this.update=this.update.bind(this)
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
            <div className="App">
                <MainWindow state={this.state}/>
                <ButtonPane update={this.update}/>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }
}

export default App;
