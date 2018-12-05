import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { Font, AppLoading } from "expo";
import AppStackNavigator from './navigation/navigator'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingComplete: false,
    };
  }


  async componentDidMount() {
    let storedValue = await AsyncStorage.getItem("usered");
    console.log("Fetched data: ", storedValue);
    if (storedValue == null) {
      console.log("Writing data!");
      this.setState({
        user: true
      });
      storedValue = await AsyncStorage.setItem("usered", "data");
    }

  }



  _loadResourcesAsync = async () => {
    return Promise.all([
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      })
    ]);
  };


  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };


  render() {

    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />

      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="default" />
        <AppStackNavigator />
          
        </View>
      );
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
