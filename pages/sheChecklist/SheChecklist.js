import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/sheChecklist';

class SheChecklist extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'Home'}
          title="She Checklist"
          {...this.props}
        />
        <View style={styles.sheTracksMenu}>
          <View style={styles.panel}>
            <Text style={styles.panelText}>All Checklists</Text>
          </View>
          <TouchableOpacity
            style={styles.panel}
            onPress={() => navigation.navigate('ChecklistActions')}
          >
            <Text style={styles.panelText}>Creat/Remove/Modify</Text>
          </TouchableOpacity>
          <View style={styles.panel}>
            <Text style={styles.panelText}>Open Submitted Checklists</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SheChecklist;
