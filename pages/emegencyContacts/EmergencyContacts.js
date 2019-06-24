import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/emergencyContacts';

class EmergencyContacts extends Component {
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
            <View style={styles.panelNumber}>
              <Text style={styles.panelText}>Emergency</Text>
            </View>
            <View style={styles.callNumber}>
              <Text style={styles.panelText}>Call Now</Text>
            </View>
          </View>
          <View style={styles.panel}>
            <View style={styles.panelNumber}>
              <Text style={styles.panelText}>She Engineer</Text>
            </View>
            <View style={styles.callNumber}>
              <Text style={styles.panelText}>Call Now</Text>
            </View>
          </View>
          <View style={styles.panel}>
            <View style={styles.panelNumber}>
              <Text style={styles.panelText}>She Lead</Text>
            </View>
            <View style={styles.callNumber}>
              <Text style={styles.panelText}>Call Now</Text>
            </View>
          </View>
          <View style={styles.panel}>
            <View style={styles.panelNumber}>
              <Text style={styles.panelText}>She Defence</Text>
            </View>
            <View style={styles.callNumber}>
              <Text style={styles.panelText}>Call Now</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Create/Remove/Modify</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EmergencyContacts;
