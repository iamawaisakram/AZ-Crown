import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  TextInput
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR, CONTRAST_COLOR } from '../../config';

//Icon
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/FontAwesome';

//style
import styles from '../../assets/stylesheets/sheAsks';

class SheAsks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
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
    const { message } = this.state;
    const { navigation } = this.props;
    const OPTIONS = [
      'Cancel',
      'Camera',
      'Photo and Video Library',
      'Document',
      'Location',
      'Contact'
    ];
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
          title="She Asks"
          {...this.props}
        />
        <View style={styles.chatContainer}>
          <View style={styles.adminTextView}>
            <View style={styles.textView}>
              <Text style={styles.text}>Text by Admin</Text>
            </View>
          </View>
          <View style={styles.userTextView}>
            <View style={styles.textView}>
              <Text style={styles.text}>Text by User</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.addFilesView}
            onPress={() => this.ActionSheet.show()}
          >
            <Icon name="plus" color={CONTRAST_COLOR} size={30} />
          </TouchableOpacity>
          <View style={styles.inputView}>
            <TextInput
              value={message}
              onChangeText={value => this.setValue('message', value)}
              placeholder="Insert Your Text Here"
              placeholderTextColor={CONTRAST_COLOR}
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.addFilesView}>
            <Icon name="camera" color={CONTRAST_COLOR} size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addFilesView}>
            <FIcon name="microphone" color={CONTRAST_COLOR} size={30} />
          </TouchableOpacity>
        </View>
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={'Select'}
          options={OPTIONS}
          cancelButtonIndex={0}
          onPress={index => {}}
        />
      </View>
    );
  }
}

export default SheAsks;
