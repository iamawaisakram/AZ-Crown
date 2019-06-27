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

class AssignedSheAction extends Component {
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
          backTo={'SheActionFeedback'}
          title="Assigned She Action"
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
          <TouchableOpacity style={styles.select}>
            <View style={styles.toView}>
              <Text style={styles.toText}>TO:</Text>
            </View>
            <View style={styles.ccView}>
              <Text style={styles.ccText}>Click to select the User</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.select}>
            <View style={styles.toView}>
              <Text style={styles.toText}>CC:</Text>
            </View>
            <View style={styles.ccView}>
              <Text style={styles.ccText}>Click to select the User</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonsView}>
            <TouchableOpacity style={styles.button}>
              <Icon name="camera" color={CONTRAST_COLOR} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="video" color={CONTRAST_COLOR} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="paperclip" color={CONTRAST_COLOR} size={25} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AssignedSheAction;
