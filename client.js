// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"



import {ReactInstance, Module, Surface,Location} from 'react-360-web';
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
// const surfaceModule1 = NativeModules.surfaceModule;
// const BrowserInfo = NativeModules.Location;
// const shopno = BrowserInfo.search.substring(1);
// console.log(BrowserInfo.search.substring(1));

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  introPanel = new Surface(
    500, /* width */
    400, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('test', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  Panel1 = new Surface(
    170,
    170,
    Surface.SurfaceShape.Flat

  )

  Panel1.setAngle(
    Math.PI / 2 - .4, /* yaw angle */
    0.1 /* pitch angle */
  );

  Panel2 = new Surface(
    170,
    170,
    Surface.SurfaceShape.Flat
  )

  Panel2.setAngle(
    Math.PI / 2, /* yaw angle */
    0.1 /* pitch angle */
  );

  Panel3 = new Surface(
    180,
    180,
    Surface.SurfaceShape.Flat
  );

  Panel3.setAngle(
    Math.PI / 2 + .4, /* yaw angle */
    0.1 /* pitch angle */
  );
  
  // const location = new Location([0, -1, -2]);
  // r360.renderToLocation(
  // r360.createRoot('threeDshoes'),
  // location,
  // );
  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('store.jpg'));

  // const location1 = new Location([0, -2, -2]);
  // r360.renderToLocation(
  // r360.createRoot('threeDshirt'),
  // location1,
  // );
  // Load the initial environment
 
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height, id) {
    if (id === 'Panel1') {
      Panel1.resize(width, height);
    } else if (id === 'Panel2') {
      Panel2.resize(width, height);
    } else if (id === 'Panel3') {
      Panel3.resize(width, height);
    }
  }

  start(id) {

    r360.compositor.setBackground(r360.getAssetURL(`360store${id}.jpg`));

    r360.renderToSurface(
      r360.createRoot('Panel1', { id: 'Panel1',}),
      Panel1,
    );

    r360.renderToSurface(
      r360.createRoot('Panel2', { id: 'Panel2',}),
      Panel2,
    );

    r360.renderToSurface(
      r360.createRoot('Panel3', { id: 'Panel3',}),
      Panel3,
    );


    r360.detachRoot(introRoot);
  }

}



window.React360 = {init};

/*import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('test', { /* initial props */ //}),
//    r360.getDefaultSurface()
//  );

//  // Load the initial environment
//  r360.compositor.setBackground(r360.getAssetURL('store.jpg'));
//}

//window.React360 = {init};
