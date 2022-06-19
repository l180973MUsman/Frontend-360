import React, {PureComponent} from 'react'
import {  AppRegistry,asset, VrButton, Text} from 'react-360'
import { StyleSheet, View, Animated, Image} from 'react-native';
import Entity from 'Entity'
import { Model } from 'react-360';
// import { subscribe } from './src/rotate';

export default class threeDshirt extends React.Component{
    
    constructor() {
      super();
      this.state = {
        rotation: 130,
      };
      this.lastUpdate = Date.now();
  
      this.rotate = this.rotate.bind(this);
    }
    componentDidMount() {
      this.rotate();
    }
  
    componentWillUnmount() {
      if (this.frameHandle) {
        cancelAnimationFrame(this.frameHandle);
        this.frameHandle = null;
      }
    }
  
    rotate() {
      const now = Date.now();
      const delta = now - this.lastUpdate;
      this.lastUpdate = now;
  
      this.setState({
          rotation: this.state.rotation + delta / 150
      });
      this.frameHandle = requestAnimationFrame(this.rotate);
    }
  
        render(){
          return(
          <Entity
          source={{
          obj: asset('13647_Polo_Team_Shirt_v2_L3.obj'),
          mtl: asset('13647_Polo_Team_Shirt_v2_L3.mtl')
          }}
          lit={true}
          style={{transform:[
              {translate: [-12, -2, -20]},
              // {rotateY: RotateData},
              {rotateY: this.state.rotation},
              {rotateX: "-90deg"},
              { scale: 0.125 },
              // {scaleX: 0.05 },
              // { scaleY: 0.05 },
              // { scaleZ: 0.05 },
          // { rotateX: rotated },
          ]}}
          />
        )}
  
  }