
import React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';

import Background from './components/Background';
import Field from './components/Field';
const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#edf2f6', width: "100%", }} behavior="padding" >
      <View>
        <Background>
        </Background>
        <View
          style={{
            paddingTop: 30,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 25, color: '#535165', fontWeight: 'bold' }}>
            Đăng nhập
          </Text>
          <Field>
          </Field>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}
export default LoginScreen;
