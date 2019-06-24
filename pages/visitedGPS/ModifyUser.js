import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR, CONTRAST_COLOR } from '../../config';

//Icons
import Icon from 'react-native-vector-icons/Feather';

//style
import styles from '../../assets/stylesheets/visitedGPS';

class ModifyUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      phoneNumber: '',
      secured: true
    };
  }

  setValue(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { userName, phoneNumber } = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'VisitedGPS'}
          title={'Create/Remove/Modify User'}
          {...this.props}
        />
        <View style={styles.inputs}>
          <View style={styles.userPicture}>
            <Icon name="image" color={CONTRAST_COLOR} size={40} />
          </View>
          <View style={styles.emailView}>
            <TextInput
              style={styles.userInput}
              value={userName}
              onChangeText={value => this.setValue('userName', value)}
              placeholder="User Name"
              placeholderTextColor={CONTRAST_COLOR}
            />
          </View>
          <View style={styles.emailView}>
            <TextInput
              style={styles.userInput}
              value={phoneNumber}
              onChangeText={value => this.setValue('phoneNumber', value)}
              placeholder="Phone Number"
              placeholderTextColor={CONTRAST_COLOR}
            />
          </View>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.inputTitle}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.inputTitle}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.inputTitle}>Modify</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ModifyUser;
