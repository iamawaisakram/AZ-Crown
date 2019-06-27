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

class AssignedGoCard extends Component {
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
    const { comment, observationDetails } = this.state;
    const { navigation } = this.props;
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
          title="Assigned Go Card"
          {...this.props}
        />
        <View style={styles.inputContainers}>
          <View style={styles.inputAndPhotoAssign}>
            <TextInput
              style={styles.observationDetailsAssignedCard}
              multiline={true}
              value={observationDetails}
              placeholder="Observation Details"
              placeholderTextColor={CONTRAST_COLOR}
              onChangeText={value => this.setValue('observationDetails', value)}
            />
            <View style={styles.photoViewAssignedCard}>
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
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.submitText}>Submit & Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AssignedGoCard;
