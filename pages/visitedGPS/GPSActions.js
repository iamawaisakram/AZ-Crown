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
import styles from '../../assets/stylesheets/visitedGPS';

class GPSActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: '',
      long: ''
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
    const { lat, long } = this.state;
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={this.containerTouched.bind(this)}
      >
        <Header
          leftIcon={false}
          rightIcon={false}
          backIcon={true}
          backTo={'VisitedGPS'}
          title="Modify Lat/Long"
          {...this.props}
        />
        <View style={styles.actionPanel}>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Latitude</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.inputTitle}>Longitude</Text>
            </View>
          </View>
          <View style={styles.trainingPanel}>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={lat}
                onChangeText={value => this.setValue('lat', value)}
              />
            </View>
            <View style={styles.cell}>
              <TextInput
                style={styles.input}
                value={long}
                onChangeText={value => this.setValue('long', value)}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GPSActions;
