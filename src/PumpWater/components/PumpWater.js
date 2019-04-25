import React, {Component} from "react";

export class PumpWater extends Component {
    render() {
        return  this.props.isOn ? <div className='pump-water'> </div> : null;
    }
}
