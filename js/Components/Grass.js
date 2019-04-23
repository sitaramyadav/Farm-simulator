import React, {Component} from 'react';
import {Blade} from './Blade';
import "../CSS/Grass";

export class Grass extends Component {
    constructor(props){
        super(props);
        this.state = {
            blades: []
        }
    }

    createGrass() {
        var numberOfBlades = 400;
        for (var i = 0; i < numberOfBlades; i++) {
            var blade = <Blade key={i.toString()}/>;
            this.state.blades.push(blade);
          }
    }

    render(){
        if(this.state.blades.length == 0) this.createGrass();
        return <div className="grass">{
            this.state.blades.map((blade)=> blade)
        } </div>;
    }
};