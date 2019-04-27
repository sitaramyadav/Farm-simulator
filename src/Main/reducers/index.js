import {CHANGE_DAY_MODE} from '../../Button/Actions/Button';
import {CHANGE_SOIL_MODE} from "../../Button/Actions/Button";
import {CHANGE_WATER_PUMP_MODE} from "../../Button/Actions/Button";

export default (state = {
    day: true,
    cloudy: false,
    drySoil: true,
    waterLevel: 50,
    waterPump: false
}, action) => {
    switch (action.type) {

        case CHANGE_DAY_MODE:
            return {...state, day: !state.day};

        case CHANGE_SOIL_MODE:
            return {...state, drySoil: !state.drySoil};

        case CHANGE_WATER_PUMP_MODE:
            return {...state, waterPump: !state.waterPump};

        default:
            return state
    }
}

