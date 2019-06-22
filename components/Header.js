import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//StatusBae
import { MyStatusBar } from './StatusBar';

//Icon
import Icon from 'react-native-vector-icons/Feather';

//style
import styles from '../assets/stylesheets/header';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <MyStatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Icon name="align-left" size={30} color="#000" />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Home</Text>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Icon name="bell" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
