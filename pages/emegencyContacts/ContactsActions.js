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

//config
import { PRIMARY_COLOR, SECONDARY_COLOR, CONTRAST_COLOR } from '../../config';

//Icons
import Icon from 'react-native-vector-icons/Feather';

//style
import styles from '../../assets/stylesheets/sheChecklist';

class ContactsActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checklistName: '',
      uploadChecklist: '',
      trainingMaterial: '',
      quiz: ''
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
    const { checklistName, uploadChecklist } = this.state;
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
          backTo={'EmergencyContacts'}
          title="Create/Remove/Modify"
          {...this.props}
        />
        <View style={styles.actionPanel}>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Name</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Phone Number</Text>
            </View>
          </View>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={checklistName}
                onChangeText={value => this.setValue('checklistName', value)}
              />
            </View>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={uploadChecklist}
                onChangeText={value => this.setValue('uploadChecklist', value)}
              />
            </View>
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
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('EmergencyContacts')}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ContactsActions;
