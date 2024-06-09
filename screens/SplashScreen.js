// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../Images/caesar.png')} style={styles.image} />
      <Text style={styles.text}>Code Caesar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7F2122',
  },
  text: {
    fontSize: 32,
    color: '#FACD1E',
    fontWeight: 'bold',
  },
  image: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    borderRadius: 100, // Make it circular
    marginBottom: 12,
  },
});

export default SplashScreen;
