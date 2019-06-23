import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/sheTracks';

class SheTracks extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'Home'}
          title="She Observations"
          {...this.props}
        />
        <View style={styles.sheTracksMenu}>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Open All Actions</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Create New Action</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Import/Export Actions</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SheTracks;
