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
          title="She Games"
          {...this.props}
        />
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => navigation.navigate('GameDetails')}
            style={styles.panel}
          >
            <Text style={styles.panelText}>Emergency Management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('GameDetails')}
            style={styles.panel}
          >
            <Text style={styles.panelText}>Risk Management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('GameDetails')}
            style={styles.panel}
          >
            <Text style={styles.panelText}>Speed Management</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('GamesActions')}
        >
          <Text style={styles.submitText}>Create/Remove/Modify</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SheGames;
