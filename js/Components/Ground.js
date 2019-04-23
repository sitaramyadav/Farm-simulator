import React, {Component} from "react";

import '../CSS/Ground.css'
export class Ground extends Component {
    render(){
        console.log(this.props.drySoil)
        let classes = `Ground ${this.props.drySoil ? 'dry' : 'wet' }`
        console.log(classes)
        return <div className={classes} />;
    }
}