/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//Menu data
import { homeMenuLeft, homeMenuRight } from '../../utils/homeMenu';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/home';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarColor={PRIMARY_COLOR}
          secondaryColor={SECONDARY_COLOR}
          {...this.props}
        />
        <View style={styles.menu}>
          <View style={styles.leftMenu}>
            {homeMenuLeft.map((item, i) => (
              <TouchableOpacity key={i} style={styles.menuItem}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.rightMenu}>
            {homeMenuRight.map((item, i) => (
              <TouchableOpacity key={i} style={styles.menuItem}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
