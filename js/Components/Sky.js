import React, {Component} from "react";
import '../CSS/sky.css';
export class Sky extends Component {
    render() {
        const cloudyStyle = {
            "background" : "#e2ebf0"
        };
        const sky = {
            "background": "#b7eaff"
        };

        const night_sky = {
            "background": "#010A10"
        };
        const night_sky_container = this.props.day ? null : <div className="night-sky-image" />;
        const style = this.props.day ? (this.props.cloudy ? cloudyStyle : sky) : night_sky;
            return <div>{night_sky_container}
            <div className={this.props.day ? 'sky' : 'night-sky'} style={style}/></div>;
    }
}