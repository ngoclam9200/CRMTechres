import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#495b72', 
    },
    background: {
      width: '100%',
      height: 70,
      paddingBottom:20
   
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      color: 'white',
      paddingTop:20,
      paddingBottom:10
    },
    input: {
        borderRadius: 100,
        color: 'black',
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#c2c2c2',
        borderStyle: 'solid'
      },
      iconContainer: {
        position: 'absolute',
        top: 25,
        right: 20,
      },
      containerFieldLogin: {
        width: '85%', 
      },
      btnLogin:{
        backgroundColor: "#fa6342",
        borderRadius: 100,
        alignItems: 'center',
        width: 150,
        paddingVertical: 8,
        marginVertical: 10,
      }
  });
  export default styles;