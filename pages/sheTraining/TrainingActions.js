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
import styles from '../../assets/stylesheets/sheTraining';

class TrainingActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainingName: '',
      passScore: '',
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
    const { trainingName, trainingMaterial, passScore, quiz } = this.state;
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={this.containerTouched.bind(this)}
      >
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'SheTraining'}
          title="Create/Remove/Modify"
          {...this.props}
        />
        <View style={styles.actionPanel}>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Training Name</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Pass Score</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Upload Training Material</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Upload Quiz</Text>
            </View>
          </View>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={trainingName}
                onChangeText={value => this.setValue('trainingName', value)}
              />
            </View>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={passScore}
                onChangeText={value => this.setValue('passScore', value)}
              />
            </View>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={trainingMaterial}
                onChangeText={value => this.setValue('trainingMaterial', value)}
              />
            </View>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={quiz}
                onChangeText={value => this.setValue('quiz', value)}
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
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TrainingActions;
