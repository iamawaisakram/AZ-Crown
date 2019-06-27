import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../config';

//style
import styles from '../../assets/stylesheets/sheObservation';

class SheObservation extends Component {
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
        <View style={styles.menu}>
          <View style={styles.leftMenu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('CreateStopCard')}
            >
              <View style={styles.cardHeadingView}>
                <Text style={styles.cardHeading}>Think</Text>
              </View>
              <View style={styles.itemTitleView}>
                <Text style={styles.itemTitle}>
                  The life you save maybe your own
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.cardHeadingView}>
                <Text style={styles.cardHeading}>Import/Export Data</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightMenu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('CreateGoCard')}
            >
              <View style={styles.cardHeadingView}>
                <Text style={styles.cardHeading}>Be She</Text>
              </View>
              <View style={styles.itemTitleView}>
                <Text style={styles.itemTitle}>
                  Strengthen your safety culture
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.cardHeadingView}>
                <Text style={styles.cardHeading}>Import/Export Data</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SheObservation;
