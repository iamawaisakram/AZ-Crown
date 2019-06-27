import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

//Component
import Alerts from './Alerts';

//status bar
import { MyStatusBar } from './StatusBar';

//Icon
import Icon from 'react-native-vector-icons/Feather';

//style
import styles from '../assets/stylesheets/header';

//config
import { PRIMARY_COLOR, CONTRAST_COLOR } from '../config';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }

  showModal() {
    this.setState({ modal: true });
  }

  hideModal() {
    this.setState({ modal: false });
  }

  componentWillUnmount() {
    this.hideModal();
  }

  render() {
    const {
      statusBarColor,
      navigation,
      leftIcon,
      rightIcon,
      title,
      backIcon,
      backTo
    } = this.props;
    return (
      <View>
        <MyStatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />
        <View style={[styles.header]}>
          {leftIcon && (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon name="align-left" size={30} color={CONTRAST_COLOR} />
            </TouchableOpacity>
          )}
          {backIcon && (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.navigate(backTo)}
            >
              <Icon name="chevron-left" size={30} color={CONTRAST_COLOR} />
            </TouchableOpacity>
          )}
          <View
            style={[
              styles.title,
              !leftIcon && !rightIcon && !backIcon
                ? { width: widthPercentageToDP('100%') }
                : ''
            ]}
          >
            <Text style={[styles.titleText]}>{title}</Text>
          </View>
          {rightIcon && (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.showModal()}
            >
              <Icon name="bell" size={30} color={CONTRAST_COLOR} />
            </TouchableOpacity>
          )}
        </View>
        <Alerts
          {...this.props}
          hideModal={this.hideModal.bind(this)}
          modal={this.state.modal}
        />
      </View>
    );
  }
}

export default Header;
