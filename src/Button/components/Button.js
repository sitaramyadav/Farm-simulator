import React from "react";
import '../../CSS/button.css';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayNightToggleClick = this.handleDayNightToggleClick.bind(this);
        this.handleSoilToggleClick = this.handleSoilToggleClick.bind(this);
        this.handleWaterPumpToggleClick = this.handleWaterPumpToggleClick.bind(this);
    }

    handleDayNightToggleClick() {
        this.props.onDayNightToggle();
    }

    handleSoilToggleClick() {
        this.props.onSoilToggle();
    }

    handleWaterPumpToggleClick() {
        this.props.onWaterPumpToggle();
    }

    render() {
        return (
            <div className="controls">
                <button onClick={this.handleDayNightToggleClick} className="control day_night"> Day_Night</button>
                <button onClick={this.handleSoilToggleClick} className="control dry_wet_soil"> Dry_Wet_Soil</button>
                <button onClick={this.handleWaterPumpToggleClick} className="control water_pump"> Water_Pump</button>
            </div>
        )
    }
}