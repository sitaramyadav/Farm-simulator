import React, {PureComponent} from 'react';
import {Blade} from './Blade';

export class Grass extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            blades: [...Array(400).keys()]
        }
    }
    render(){
        return <div className="grass-image">{
            // this.state.blades.map(count =>{
            //     return <Blade key={count}/>
            // })
        } </div>;
    }
};