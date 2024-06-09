import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/caesar.png')} style={styles.image} />
      <Text style={styles.title}>Introduction to Caesar Cipher</Text>
      <Text style={styles.description}>
        The Caesar cipher is a simple encryption technique that was used by Julius Caesar to send secret messages to his allies. It works by shifting the letters in the plaintext message by a certain number of positions, known as the "shift" or "key".
      </Text>
      <TouchableOpacity style={styles.tryNowButton} onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.tryNowButtonText}>Try now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#732C2C',
    padding: 23,
  },
  image: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
    borderRadius: 100, // Make it circular
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#D6AE71',
    textAlign: 'center',
    marginBottom: 40,
  },
  tryNowButton: {
    backgroundColor: '#D6AE71',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    width:300,
    height:50
  },
  tryNowButtonText: {
    color: '#fff',
    fontSize: 16,
    justifyContent:'center',
    alignSelf:'center',
    margin:5,
    fontWeight:'600',
    fontSize: 18,
    alignItems:'center'
  },
});

export default WelcomeScreen;
