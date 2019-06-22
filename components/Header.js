import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

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
    const {
      statusBarColor,
      navigation,
      leftIcon,
      rightIcon,
      title
    } = this.props;
    return (
      <View>
        <MyStatusBar
          backgroundColor={statusBarColor}
          barStyle="light-content"
        />
        <View style={[styles.header, { backgroundColor: statusBarColor }]}>
          {leftIcon && (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon name="align-left" size={30} color="#fff" />
            </TouchableOpacity>
          )}
          <View
            style={[
              styles.title,
              !leftIcon && !rightIcon
                ? { width: widthPercentageToDP('100%') }
                : ''
            ]}
          >
            <Text style={[styles.titleText, { color: '#fff' }]}>{title}</Text>
          </View>
          {rightIcon && (
            <TouchableOpacity style={styles.icon}>
              <Icon name="bell" size={30} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default Header;
