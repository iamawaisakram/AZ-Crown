import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';

//status Bar
import { MyStatusBar } from '../components/StatusBar';

// Style sheet
import styles from '../assets/stylesheets/home';

export default (WrappedComponent, props = {}) => {
  class withUserHOC extends Component {
    render() {
      const {} = props;
      const leftButtonConfig = (
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Scanning')}
            style={styles.logo}
          />
        </View>
      );
      return (
        <View style={styles.main}>
          <MyStatusBar backgroundColor="#fff" barStyle="dark-content" />
          {/* <NavigationBar
            style={styles.navbar}
            leftButton={leftButtonConfig}
          /> */}
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  }

  const mapStateToProps = ({}) => ({});

  const mapDispatchToProps = dispatch => ({});

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withUserHOC);
};
