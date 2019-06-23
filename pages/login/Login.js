import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

//Components
import Header from '../../components/Header';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR, CONTRAST_COLOR } from '../../config';

//Icons
import Icon from 'react-native-vector-icons/Feather';

//style
import styles from '../../assets/stylesheets/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      secured: true
    };
  }

  setValue(key, value) {
    this.setState({ [key]: value });
  }

  seePassword() {
    this.setState({ secured: !this.state.secured });
  }

  render() {
    const { userName, password, secured } = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftIcon={false}
          rightIcon={false}
          title={'Login'}
          {...this.props}
        />
        <View style={styles.inputs}>
          <View style={styles.emailView}>
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={value => this.setValue('userName', value)}
              placeholder="User Name"
              placeholderTextColor={CONTRAST_COLOR}
            />
          </View>
          <View style={styles.emailView}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={value => this.setValue('password', value)}
              placeholder="Password"
              secureTextEntry={secured}
              placeholderTextColor={CONTRAST_COLOR}
            />
            {secured && (
              <TouchableOpacity
                style={styles.icon}
                onPress={() => this.seePassword()}
              >
                <Icon name="eye" color={CONTRAST_COLOR} size={25} />
              </TouchableOpacity>
            )}
            {!secured && (
              <TouchableOpacity
                style={styles.icon}
                onPress={() => this.seePassword()}
              >
                <Icon name="eye-off" color={CONTRAST_COLOR} size={25} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.indicatiorView}>
          <Text style={styles.copyright}>@AstraZenca/Karim Ali</Text>
        </View>
      </View>
    );
  }
}

export default Login;
