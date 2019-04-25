import React, {Component} from "react";
import '../../CSS/Ground.css';

export class Ground extends Component {
    render(){
        console.log(this.props.drySoil)
        let classes = `Ground ${this.props.drySoil ? 'dry' : 'wet' }`
        return <div className={classes} />;
    }
}