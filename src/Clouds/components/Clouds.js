import React, {Component} from 'react';
import '../../CSS/Clouds.css';

export class Clouds extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return this.props.day ? <div className="morning_clouds">
        <div className="cloud cloud1"/>
        <div className="cloud cloud2"/>
        <div className="cloud cloud3"/>
        <div className="cloud cloud4"/>
        <div className="cloud cloud5"/>
        <h1> Inside clouds </h1>
    </div> : null
    };
}