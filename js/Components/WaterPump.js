import React, {Component} from "react";
import '../CSS/waterPump.css';

export class WaterPump extends Component {
    render() {
        return  <div>
            <div className='pump-neck-1'></div>
            <div className='pump-neck-2'></div>
            <div className='pump-neck-3'></div>
            <div className='pump-neck-4'></div>
            <div className='pump-neck-5'></div>
            <div className='pump-mouth'></div>
        </div> ;
    }
}