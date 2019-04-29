import React, {Component} from "react";
import '../../CSS/pumpWater.css';

export class PumpWater extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return  <div>
        {this.props.isOn ? <div className='pump-water'> </div> : null}
        </div>
    }
}
