import React from 'react';
import '../../CSS/App.css';
import MainWindow from '../../MainWindow/containers/main-window';
import Button from "../../Button/containers/Button";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                <MainWindow/>
                <Button/>
            </div>
        );
    }
}