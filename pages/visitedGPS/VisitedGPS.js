import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/visitedGPS';

class VisitedGPS extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'Home'}
          title="Visited GPS"
          {...this.props}
        />
        <View style={styles.sheTracksMenu}>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Open Visual GPS</Text>
          </View>
          <TouchableOpacity
            style={styles.panel}
            onPress={() => navigation.navigate('ModifyUser')}
          >
            <Text style={styles.panelText}>Creat/Remove/Modify User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panel}
            onPress={() => navigation.navigate('ExportGPS')}
          >
            <Text style={styles.panelText}>Export Visual GPS Records</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panel}
            onPress={() => navigation.navigate('GPSActions')}
          >
            <Text style={styles.panelText}>Modif Lat/Long</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default VisitedGPS;
