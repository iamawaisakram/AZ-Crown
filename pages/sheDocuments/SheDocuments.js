import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/sheDocuments';

class SheDocuments extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'Home'}
          title="She Documents"
          {...this.props}
        />
        <View style={styles.sheTracksMenu}>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Guide Lines</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>SOP's</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Bo She</Text>
          </View>
          <View style={styles.panel}>
            <Text style={styles.panelText}>SDS</Text>
          </View>
          <TouchableOpacity
            style={styles.panel}
            onPress={() => navigation.navigate('DocumentActions')}
          >
            <Text style={styles.panelText}>Creat/Remove/Modify</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SheDocuments;
