/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

//style
import styles from '../../assets/stylesheets/home';
import Header from '../../components/Header';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

export default Home;
