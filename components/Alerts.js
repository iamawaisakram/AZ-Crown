import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Share,
  Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';

//iocns
import Icon from 'react-native-vector-icons/AntDesign';

//style
import styles from '../assets/stylesheets/alerts';
import { CONTRAST_COLOR } from '../config';

class Alerts extends Component {
  render() {
    const { modal, hideModal, navigation } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => hideModal()}
        visible={modal}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => {
            hideModal();
          }}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => hideModal()}
              >
                <Icon name="closesquareo" size={30} color={CONTRAST_COLOR} />
              </TouchableOpacity>
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
              >
                <TouchableOpacity
                  style={styles.element}
                  onPress={() => {
                    hideModal();
                    navigation.navigate('StopCardFeedback');
                  }}
                >
                  <Text style={styles.elementText}>
                    You've Recieved A Stop Card
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.element}
                  onPress={() => {
                    hideModal();
                    navigation.navigate('AssignedGoCard');
                  }}
                >
                  <Text style={styles.elementText}>
                    You've Recieved A Go Card
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default Alerts;
