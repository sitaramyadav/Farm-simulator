import React, {Component} from 'react';
import './../CSS/App.css';
import {MainWindow} from "./MainWindow";
import {ButtonPane} from "./ButtonPane";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: true,
            cloudy: false,
            rainy: false,
            wind: "stable",
            waterlevel: 70,
            temperature: 0,
            pump: false,
            humidity: 0,
            power: true,
            moisture: true
        }
        this.update = this.update.bind(this);
        this.updateState = this.updateState.bind(this);
        this.poll = this.poll.bind(this);
    }

    update(property, value) {
        this.setState(() => {
            return {
                [property]: value
            }
        })
    }

    updateState({data}) {
        this.setState(data)
    }

    poll() {
        axios.get(window.location.href+'stats')
            .then(this.updateState)
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.timer = setInterval(() => this.poll(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        this.timer = null;
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
        console.log("updated",this.state)
    }
}

export default App;
