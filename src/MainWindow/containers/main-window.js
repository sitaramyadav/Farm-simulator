import {connect} from "react-redux";
import MainWindow from "../components/MainWindow";

const mapStateToProps = (state) => {
    return {
        day: state.main.day,
        cloudy: state.main.cloudy,
        drySoil: state.main.drySoil,
        waterLevel: state.main.waterLevel,
        waterPump: state.main.waterPump
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);