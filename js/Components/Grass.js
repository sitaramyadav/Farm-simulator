import React, {Component} from 'react';
import "../CSS/Grass";

var numberOfBlades = 400;

function getStyle(keyForElement) {
  var randomHeight =  Math.floor(Math.random() * 150);
  var randomLeft = Math.floor(Math.random() * (window.innerWidth - 180));
  var randomRotation = Math.floor(Math.random() * 10) - 5;
  return {
      style: {
          height: (randomHeight + 100) + 'px',
          zIndex: randomHeight,
          opacity: randomHeight * 0.02,
          left: randomLeft +'px',
          transform: 'rotate(' + randomRotation + 'deg)'
      },
      key: keyForElement
  }
}

export class Grass extends Component {
    constructor(props){
        super(props);
        this.state = {
            blades: []
        }
    }

    createGrass() {
        for (var i = 0; i < numberOfBlades; i++) {
            var style = getStyle(i);
            var blade = React.createElement("div",style);
            this.state.blades.push(blade);
          }
    }

    render(){
        this.createGrass();
        return <div className="grass">{
            this.state.blades.map((blade)=> blade)
        } </div>;
    }
};