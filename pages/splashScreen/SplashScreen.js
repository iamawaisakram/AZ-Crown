import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

//HOC
import withUserHOC from '../../hocs/withUserHOC';

//actions
import {} from '../../ducks/user/action';

//style
import styles from '../../assets/stylesheets/splashScreen';

class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.crown}
            source={require('../../assets/images/AZ-Crown.png')}
          />
        </View>
        <View style={styles.logoView}>
          <Text style={styles.logoTitle}>AstraZenca</Text>
          <Text style={styles.logoSubtitle}>Growth Through Innovation</Text>
        </View>
        <View style={styles.indicatiorView}>
          <Text style={styles.copyright}>@AstraZenca/Karim Ali</Text>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default withUserHOC(withConnect(SplashScreen));
