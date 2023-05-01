import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';
import * as Constants from '../../../Constants'

// import axios from 'axios';
import { callApiTemplate } from '../../../utils/api';
// import Icon from 'react-native-svg'
const Field = props => {

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const url=`${Constants.API_AUTH_POST_LOGIN}`;
    const method="post";
    const data={
      username,
      password,
    }
    const params=null;
    const response= await callApiTemplate(url, method, data, params)
    try {
      if (response.data.status===200) {
        alert(response.data );
      } else {
        alert(response);
      }
    } catch (error) {
      // Xử lý lỗi
      alert(1);
    }
  };

  return (
    <View style={styles.containerFieldLogin}>
      <TextInput  
        style={styles.input}
        placeholder="Yanmail"
        placeholderTextColor="black"
        value={username}
        onChangeText={value => setUsername(value)}
      >
      </TextInput>
      <View>
        <TextInput
          secureTextEntry={!showPassword}
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="black"
          value={password}
          onChangeText={value => setPassword(value)}
        >
        </TextInput>
        <TouchableOpacity style={styles.iconContainer}  >
          <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="black" onPress={toggleShowPassword} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems : 'center', }}>
        <TouchableOpacity style={styles.btnLogin}
          onPress={() => handleLogin()}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', paddingLeft: 10, paddingRight: 10 }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Field;
