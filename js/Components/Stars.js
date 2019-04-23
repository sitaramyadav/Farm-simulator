import React, {Component} from "react";
import '../CSS/stars.css';
import '../CSS/sky.css';

export class Stars extends Component {
    constructor(props){
        super(props)
        this.state = {
            hidden : "hidden"
        }
    }
    componentWillMount() {
        let that = this;
        setTimeout(function() {
            console.log("wait over")
            that.show();
        }, that.props.wait);
    }
    show () {
        this.setState({hidden : ""});
    }
    render() {
        return this.props.visible ? <div className={this.state.hidden}>
            <div className="stars"></div>
            <div className="twinkling"></div>
        </div> : null
    }
}