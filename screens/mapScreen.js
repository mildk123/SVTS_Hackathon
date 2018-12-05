import React from 'react';
import { Platform, View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Expo from 'expo';



export default class LinksScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      region: {
        latitude: 24.918266,
        longitude: 67.102720,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [{
        latitude: 24.918266,
        longitude: 67.102720,
        title: 'My Marker',
        description: 'Here is my marker'
      }]
    }
  }

  static navigationOptions = {
    title: 'Map',
  };


  componentWillMount() {
    if (Platform.OS === 'android' && !Expo.Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };




  onRegionChange = (region) => {
    let text = region
  }

  render() {
    console.log(this.state.location)
    return (
      <MapView
        style={styles.Map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
        {this.state.markers.map(marker => (
          <Marker
            key={marker.title}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
