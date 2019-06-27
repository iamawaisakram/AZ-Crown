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
import IonIcon from 'react-native-vector-icons/Ionicons';

//style
import styles from '../../assets/stylesheets/sheTraining';

class Results extends Component {
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
          title="Results"
          {...this.props}
        />
        <View style={styles.actionPanel}>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Score</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>10/50</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>20%</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>FAIL</Text>
            </View>
            <View style={styles.cell}>
              <IonIcon name="md-sad" color={CONTRAST_COLOR} size={30} />
            </View>
            <TouchableOpacity style={styles.buttonCell}>
              <Text style={styles.inputTitle}>Retake Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCell}>
              <Text style={styles.inputTitle}>Retake Later</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Score</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>40/50</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>80%</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>PASS</Text>
            </View>
            <View style={styles.cell}>
              <Icon name="smile" color={CONTRAST_COLOR} size={30} />
            </View>
            <TouchableOpacity style={styles.buttonCell}>
              <Text style={styles.inputTitle}>Close</Text>
            </TouchableOpacity>
            <View style={styles.cell} />
          </View>
        </View>
      </View>
    );
  }
}

export default Results;
