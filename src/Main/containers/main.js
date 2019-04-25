import {connect} from "react-redux";
import Main from '../components/main';

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

