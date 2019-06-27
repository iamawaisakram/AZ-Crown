import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//status bar
import { MyStatusBar } from './StatusBar';

//Icon
import Icon from 'react-native-vector-icons/Feather';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

//style
import styles from '../assets/stylesheets/drawer';

//config
import { PRIMARY_COLOR, CONTRAST_COLOR } from '../config';

class DrawerContentComponent extends Component {
  navigateToScreen(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />
        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.navigationCell}
            onPress={() => this.navigateToScreen('Home')}
          >
            <View style={styles.cellIcon}>
              <Icon name="user" color={CONTRAST_COLOR} size={30} />
            </View>
            <Text style={styles.navigationCellText}>Karim Ali</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.navigationCell}
            onPress={() => this.navigateToScreen('Home')}
          >
            <View style={styles.cellIcon}>
              <MCIcon name="lock-reset" color={CONTRAST_COLOR} size={30} />
            </View>
            <Text style={styles.navigationCellText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.navigationCell}
            onPress={() => this.navigateToScreen('Login')}
          >
            <View style={styles.cellIcon}>
              <Icon name="log-out" color={CONTRAST_COLOR} size={30} />
            </View>
            <Text style={styles.navigationCellText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.navigationCell}
            onPress={() => this.navigateToScreen('Home')}
          >
            <View style={styles.cellIcon}>
              <Icon name="user-plus" color={CONTRAST_COLOR} size={30} />
            </View>
            <Text style={styles.navigationCellText}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DrawerContentComponent;
