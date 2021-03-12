/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements';

class WelcomeScreen extends Component{
  static navigationOptions = {
    headerStyle:  {
      backgroundColor: 'red'
    }
  };
  render() {
    return (
      <ImageBackground source={require('./../../../assets/images/background.png')}style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Spanish Journal Network</Text>
        <Text style={styles.Tap}>Tap on our logo to enter</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDrawerNavi')}>
          <Image
              source={require('./../../../assets/images/sjn_logo.gif')}
              style={styles.logoImage}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  welcome: {
    fontSize: 50,
    color: 'black',
    fontFamily: 'KGHAPPY',
    textAlign: 'center',
    margin: 10,
  },
  Tap: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'KGHAPPY',
    textAlign: 'center',
    margin: 10,
  },
});
