import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR, CONTRAST_COLOR } from '../../config';

//icons
import Icon from 'react-native-vector-icons/Feather';

//style
import styles from '../../assets/stylesheets/sheDocuments';

class GameDetails extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'SheGames'}
          title="Game Details"
          {...this.props}
        />
        <View style={styles.simpleView}>
          <TouchableOpacity style={styles.videoPanel}>
            <Icon name="play-circle" color={CONTRAST_COLOR} size={80} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GameDetails;
