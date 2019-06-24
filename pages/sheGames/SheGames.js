import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/sheGames';

class SheGames extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'Home'}
          title="Emergency Contacts"
          {...this.props}
        />
        <View style={styles.menu}>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Emergency Management</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Risk Management</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Speed Management</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Create/Remove/Modify</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SheGames;
