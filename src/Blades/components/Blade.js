import React, {Component} from 'react';
import '../../CSS/Blade.css';

export class Blade extends Component {
    getStyle() {
        var randomHeight =  Math.floor(Math.random() * 150);
        var randomLeft = Math.floor(Math.random() * (window.innerWidth - 400));
        var randomRotation = Math.floor(Math.random() * 10) - 5;
        return {
                height: (randomHeight + 100) + 'px',
                zIndex: randomHeight,
                opacity: randomHeight * 0.02,
                left: randomLeft +'px',
                transform: 'rotate(' + randomRotation + 'deg)'
        }
    }

    render(){
        let style = this.getStyle();
        return <div style={style} className="blade"/>
    }
}