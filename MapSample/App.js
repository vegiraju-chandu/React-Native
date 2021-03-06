/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       

        <MapView style = {styles.map}
              region={{
                latitude: 17.405897,
                longitude: 78.403059,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
        >


          <MapView.Marker 
          coordinate = {{ latitude: 17.405897, longitude:78.403059}} 
          title = {'MapMarker'} 
          description = {'marker description'}
          />


        </MapView>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map:{
    top:0,
    left:0,
    right:0,
    bottom:0,
    position:'absolute',
    backgroundColor:'#333333'
  }
});
