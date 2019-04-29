import {connect} from "react-redux";
import {Button} from "../components/Button";
import {changeCloudyMode, changeDayMode, changeSoilMode, changeWaterPumpMode} from "../Actions/Button";

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDayNightToggle: () => dispatch(changeDayMode()),
        onSoilToggle: () => dispatch(changeSoilMode()),
        onWaterPumpToggle: () => dispatch(changeWaterPumpMode()),
        onCloudyToggle: () => dispatch(changeCloudyMode())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);