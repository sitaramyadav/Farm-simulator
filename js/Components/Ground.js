import React, {Component} from "react";

import '../CSS/Ground.css'
export class Ground extends Component {
    render(){
        let classes = `Ground ${this.props.moisture ? 'wet': 'dry' }`
        return <div className={classes} />;
    }
}