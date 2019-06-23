import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard
} from 'react-native';

//Components
import Header from '../../components/Header';

//Icons
import Icon from 'react-native-vector-icons/Feather';

//style
import styles from '../../assets/stylesheets/sheObservation';

//config
import { CONTRAST_COLOR } from '../../config';

class SheActionFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      feedbackDetails: '',
      observationDetails: ''
    };
  }

  setValue(key, value) {
    this.setState({ [key]: value });
  }

  containerTouched() {
    Keyboard.dismiss();
    return false;
  }

  render() {
    const { comment, feedbackDetails, observationDetails } = this.state;
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={this.containerTouched.bind(this)}
      >
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'Home'}
          title="She Action Feedback"
          {...this.props}
        />
        <View style={styles.inputContainers}>
          <View style={styles.inputAndPhoto}>
            <TextInput
              style={styles.observationDetails}
              multiline={true}
              value={observationDetails}
              placeholder="Observation Details"
              placeholderTextColor={CONTRAST_COLOR}
              onChangeText={value => this.setValue('observationDetails', value)}
            />
            <View style={styles.photoView}>
              <Icon name="image" color={CONTRAST_COLOR} size={40} />
            </View>
          </View>
          <View style={styles.inputAndPhoto}>
            <TextInput
              style={styles.observationDetails}
              multiline={true}
              value={feedbackDetails}
              placeholder="Feedback Details"
              placeholderTextColor={CONTRAST_COLOR}
              onChangeText={value => this.setValue('feedbackDetails', value)}
            />
            <View style={styles.photoView}>
              <Icon name="image" color={CONTRAST_COLOR} size={40} />
            </View>
          </View>
          <View style={styles.descriptionView}>
            <TextInput
              multiline={true}
              placeholder="Insert Comment"
              placeholderTextColor={CONTRAST_COLOR}
              value={comment}
              style={styles.commentInput}
              onChangeText={value => this.setValue('comment', value)}
            />
          </View>
          <View style={styles.multipleButtonsView}>
            <TouchableOpacity style={styles.multipleButton}>
              <Text style={styles.submitText}>Accept & Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.multipleButton}>
              <Text style={styles.submitText}>Reject & Re-Assign</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SheActionFeedback;
