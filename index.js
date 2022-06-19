import React from 'react';
// import { Link } from 'react-router';
import threeDshoes from './3d'
import threeDshirt from './3d1'
// import { rotate } from './src/rotate';
import {
  AppRegistry,
  asset,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import {Surface} from 'react-360-web';
const surfaceModule = NativeModules.surfaceModule;
const BrowserInfo = NativeModules.Location;
const shopno = BrowserInfo.search.substring(1);
console.log(BrowserInfo.search.substring(1));

let Urlimage = [];

// export default class Info extends PureComponent {
//   handleClick = () => {
//     rotate();
//   };
// }




// class InfoPanel extends React.Component {
//   state = {
//     img: {
//       name: '1.png',
//       width: 170,
//       height: 170
//     }
    
//   }
  
//   transformDisplay(id) {
//     this._changeSurfaceDimensions(400, 300, id);
//     this.setState({img: {
//       name: `${id}.png`,
//         width: 400,
//         height: 300
//       }
      
//     });
//   }

//   resetPanel(id) {
//     this._changeSurfaceDimensions(170, 170, id);
//     this.setState({img: {
//       name: '${id}.png',
//         width: 170,
//         height: 170
//       }
//     });
//   }

//   _changeSurfaceDimensions(width, height, id) {
//     surfaceModule.resizeSurface(width, height, id);
//   }

//   render() {
//     let { img } = this.state;

//     return (
//       <View style={styles.displayPanel}
//             hitSlop={20}
//             onEnter={() => this.transformDisplay(this.props.id)}
//             onExit={() => this.resetPanel(this.props.id)}>
//         <Image source={asset(`${img.name}`)} style={{width: img.width, height: img.height}} />
//         <View style={styles.attractionBox}>
//           <Text style={styles.attractionText}>
//             {this.props.text}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// };

class Panel1 extends React.Component {
  state = {
    img: {
      name: Urlimage[0],
      width: 170,
      height: 170
    }
  }
  transformDisplay(id) {
    this._changeSurfaceDimensions(180, 180, id);
    this.setState({img: {
        name: `jacket-1.png`,
        // name: Urlimage[0],
        width: 180,
        height: 180
      }
      
    });
  }

  resetPanel(id) {
    this._changeSurfaceDimensions(170, 170, id);
    this.setState({img: {
        name: 'jacket-1.png',
        // name: Urlimage[0],
        width: 170,
        height: 170
      }
    });
  }

  _changeSurfaceDimensions(width, height, id) {
    surfaceModule.resizeSurface(width, height, id);
  }

  render() {
    let { img } = this.state;
    console.log("src");
    console.log();
    return (
      <View style={styles.displayPanel}
            hitSlop={20}
            onEnter={() => this.transformDisplay('Panel1')}
            onExit={() => this.resetPanel('Panel1')}>
        <Image source={{uri: Urlimage[0]}} style={{width: img.width, height: img.height}} />
        {/* <View style={styles.attractionBox}>
          <Text style={styles.attractionText}>
            {this.props.text}
          </Text>
        </View> */}
      </View>
    );
  }

};

class Panel2 extends React.Component {
  state = {
    img: {
      name: Urlimage[1],
      width: 170,
      height: 170
    }
  }

  transformDisplay(id) {
    this._changeSurfaceDimensions(180, 180, id);
    this.setState({img: {
      name: `sneakers-2.png`, //${id}.png
        width: 180,
        height: 180
      }
      
    });
  }

  resetPanel(id) {
    this._changeSurfaceDimensions(180, 180, id);
    this.setState({img: {
      name: 'sneakers-2.png',
        width: 170,
        height: 170
      }
    });
  }

  _changeSurfaceDimensions(width, height, id) {
    surfaceModule.resizeSurface(width, height, id);
  }

  render() {
    let { img } = this.state;
    console.log(Urlimage[1]);
    return (
      <VrButton onClick={() => 
        <Link to={{
                pathname: `/product`,
                // state: {id: shopData[key].id} // your data array of objects
            }}>
        </Link>}>
      <View style={styles.displayPanel}
            hitSlop={20}
            onEnter={() => this.transformDisplay('Panel2')}
            onExit={() => this.resetPanel('Panel2')}>
        <Image source={{uri: Urlimage[1]}} style={{width: img.width, height: img.height}} />
        {/* <View style={styles.attractionBox}>
          <Text style={styles.attractionText}>
            {this.props.text}
          </Text>
        </View> */}
      </View>
      </VrButton>
    );
  }
};

class Panel3 extends React.Component {
  state = {
    img: {
      name: Urlimage[2],
      width: 170,
      height: 170
    }
  }

  transformDisplay(id) {
    this._changeSurfaceDimensions(180, 180, id);
    this.setState({img: {
      name: `1.png`, //${id}.png
        width: 180,
        height: 180
      }
      
    });
  }

  resetPanel(id) {
    this._changeSurfaceDimensions(170, 170, id);
    this.setState({img: {
      name: '1.png',
        width: 170,
        height: 170
      }
    });
  }

  _changeSurfaceDimensions(width, height, id) {
    surfaceModule.resizeSurface(width, height, id);
  }

  render() {
    let { img } = this.state;
    console.log(Urlimage[2]);
    return (
      <View style={styles.displayPanel}
            hitSlop={20}
            onEnter={() => this.transformDisplay('Panel3')}
            onExit={() => this.resetPanel('Panel3')}>
        <Image source={{uri: Urlimage[2]}} style={{width: img.width, height: img.height}} />
        {/* <View style={styles.attractionBox}>
          <Text style={styles.attractionText}>
            {this.props.text}
          </Text>
        </View> */}
      </View>
    );
  }

};


export default class test extends React.Component {
  
  state = {
  }

  fetchdata(){
    fetch(`http://127.0.0.1:8000/api/product/${shopno}/getproducts/`)
    .then(response=>response.json())
    .then((data)=>{
        Object.keys(data).map((i)=>{
          Urlimage.push(data[i].Product_img[0].Product_Image_Path);
        })
        
    });
  }

  componentDidMount(){
    this.fetchdata();
  }

  render() {
    console.log(Urlimage);
    return (
      <View style={styles.panel}>
        <VrButton onClick={() => surfaceModule.start(shopno)}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Welcome to Fendi 360 Store
            </Text>
          </View>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  attractionBox: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderColor: '#C4002F',
    borderWidth: 2,
    width: 500
  },
  attractionText: {
    fontSize: 30,
    color: '#C4002F'
  },
  
});

AppRegistry.registerComponent('test', () => test);
// AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
AppRegistry.registerComponent('Panel1', () => Panel1);
AppRegistry.registerComponent('Panel2', () => Panel2);
AppRegistry.registerComponent('Panel3', () => Panel3);
// AppRegistry.registerComponent('Info', () => Info);
// AppRegistry.registerComponent('threeDshoes', () => threeDshoes);
// AppRegistry.registerComponent('threeDshirt', () => threeDshirt);