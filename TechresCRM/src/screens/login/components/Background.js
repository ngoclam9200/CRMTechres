import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from '../styles';

const Background = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OVERATE VNTECH</Text>
      <ImageBackground source={require('../../../assets/baner-forum.png')} style={styles.background} resizeMode='contain'>
      </ImageBackground>
    </View>
  );
};
export default Background;
