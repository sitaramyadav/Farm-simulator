import React, {PureComponent} from 'react';
import "../CSS/rain.css"

export class Rain extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    randRange(minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

    render() {
        return <div className="rain-image" style={{opacity: this.props.rainy ? 0.3 : 0}}>
            {/*{[...Array(200)].map((index, ele) => {*/}
                {/*let dropLeft = this.randRange(0, 100);*/}
                {/*let dropTop = this.randRange(-1000, 1400);*/}
                {/*return <div className="drop" style={{"left": dropLeft + "%", "top": dropTop}} key={"drop" + ele}></div>*/}
            {/*})}*/}
        </div>

    }
};