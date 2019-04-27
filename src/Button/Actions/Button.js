export const CHANGE_DAY_MODE = 'CHANGE_DAY_MODE';
export const CHANGE_SOIL_MODE = 'CHANGE_SOIL_MODE';
export const CHANGE_WATER_PUMP_MODE = 'CHANGE_WATER_PUMP_MODE';

export const changeDayMode = () => {
    return {
        type: CHANGE_DAY_MODE,
        payload: {}
    }
};

export const changeSoilMode = () => {
    return {
        type: CHANGE_SOIL_MODE,
        payload: {}
    }
};

export const changeWaterPumpMode = () => {
    return {
        type: CHANGE_WATER_PUMP_MODE,
        payload: {}
    }
};