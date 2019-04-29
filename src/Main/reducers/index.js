import {CHANGE_CLOUDY_MODE, CHANGE_DAY_MODE, CHANGE_SOIL_MODE, CHANGE_WATER_PUMP_MODE} from '../../Button/Actions/Button';

export default (state = {
    day: true,
    cloudy: false,
    drySoil: true,
    waterLevel: 70,
    waterPump: false,
    rainy: false,
    wind: "stable",
    temperature: 0,
    humidity: 0,
    power: true,
    moisture: true
}, action) => {
    switch (action.type) {

        case CHANGE_DAY_MODE:
            return {...state, day: !state.day};

        case CHANGE_SOIL_MODE:
            return {...state, drySoil: !state.drySoil};

        case CHANGE_WATER_PUMP_MODE:
            return {...state, waterPump: !state.waterPump};

        case CHANGE_CLOUDY_MODE:
            console.log("Inside reducer ", state);
            return {...state, cloudy: !state.cloudy};

        default:
            return state
    }
}

