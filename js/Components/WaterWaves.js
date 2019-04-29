import React, {PureComponent} from "react";
import '../CSS/waterWaves.css';

export class WaterWaves extends PureComponent {
    render() {
        return <div className="waves" >
            <div className="wave-1"></div>
            <div className="wave-2"></div>
            <div className="wave-3"></div>
            <div className="wave-4"></div>
            <div className="wave-5"></div>
            <div className="wave-6"></div>
            <div className="wave-7"></div>
            <div className="wave-8"></div>
        </div>;
    }
}