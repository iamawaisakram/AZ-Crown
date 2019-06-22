import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//status bar
import { MyStatusBar } from './StatusBar';

//Icon
import IonIcon from 'react-native-vector-icons/Ionicons';

//style
import styles from '../assets/stylesheets/drawer';

class DrawerContentComponent extends Component {
  navigateToScreen(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.screenContainerFirst}>
          <TouchableOpacity
            style={styles.navigationCell}
            onPress={() => this.navigateToScreen('Home')}
          >
            <IonIcon
              name="md-car"
              color="#000"
              size={20}
              style={styles.cellIcon}
            />
            <Text style={styles.navigationCellText}>Vehicles</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DrawerContentComponent;
