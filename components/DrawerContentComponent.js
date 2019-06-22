import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//HOC
import withUserHOC from '../hocs/withUserHOC';

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

export default withUserHOC(DrawerContentComponent);
