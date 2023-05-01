import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';

const Btn = props => {
  return (
    <View>
    <TouchableOpacity  style={styles.btnLogin}
    onPress={() => alert("Logged In")}>
      <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', paddingLeft:10, paddingRight:10}}>
        Đăng nhập
      </Text>
    </TouchableOpacity>
    </View>
   
  );
};
export default Btn;
