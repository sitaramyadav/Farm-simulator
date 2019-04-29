import React, {Component} from 'react';
import {Blade} from '../../Blades/components/Blade';
import "../../CSS/Grass.css";

export class Grass extends Component {
    constructor(props){
        super(props);
        this.state = {
            blades: [...Array(400).keys()]
        }
    }
    render(){
        return <div className="grass">{
            this.state.blades.map(count =>{
                return <Blade key={count}/>
            })
        } </div>;
    }
};