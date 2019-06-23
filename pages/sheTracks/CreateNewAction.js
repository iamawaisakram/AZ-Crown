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

class CreateNewAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionDetails: '',
      comment: '',
      title: ''
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
    const { actionDetails, title } = this.state;
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={this.containerTouched.bind(this)}
      >
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'SheTracks'}
          title="Create New Action"
          {...this.props}
        />
        <View style={styles.inputContainers}>
          <TouchableOpacity style={styles.select}>
            <View style={styles.ccView}>
              <Text style={styles.ccText}>
                Click to select the Issuance Date
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.simpleInput}>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={value => this.setValue('title', value)}
              placeholder="Action Title"
              placeholderTextColor={CONTRAST_COLOR}
            />
          </View>
          <View style={styles.descriptionView}>
            <TextInput
              multiline={true}
              placeholder="Insert Action Details"
              placeholderTextColor={CONTRAST_COLOR}
              value={actionDetails}
              style={styles.commentInput}
              onChangeText={value => this.setValue('actionDetails', value)}
            />
          </View>
          <TouchableOpacity style={styles.select}>
            <View style={styles.ccView}>
              <Text style={styles.ccText}>Click to select the Due Date</Text>
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CreateNewAction;
