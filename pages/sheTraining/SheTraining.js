import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/sheTraining';

class SheTraining extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'Home'}
          title="She Training"
          {...this.props}
        />
        <View style={styles.sheTracksMenu}>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Open All She Training</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Create/Remove/Modify</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Export Training Records</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SheTraining;
