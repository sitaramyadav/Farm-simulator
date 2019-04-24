import React, {Component} from 'react';
import {Blade} from './Blade';
import "../CSS/Grass";

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
                return <Blade key={count.toString()}/>
            })
        } </div>;
    }
};