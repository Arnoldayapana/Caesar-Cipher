import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';

const caesarDecipher = (str, key) => {
  return str.replace(/[a-z]/gi, (char) => {
    const startCode = char < 'a' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - startCode - key + 26) % 26) + startCode);
  });
};

const DecryptScreen = () => {
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleDecrypt = () => {
    const decryptedText = caesarDecipher(message, parseInt(key, 10));
    setDecryptedMessage(decryptedText);
  };

  const copyToClipboard = () => {
    Clipboard.setString(decryptedMessage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={styles.inactiveTab}>🔒 ENCRYPT</Text>
        <Text style={styles.activeTab}>|</Text>
        <Text style={styles.activeTab}>🔓 DECRYPT</Text>
      </View>
      <View style={styles.shiftcontainer}>
        <Text style={styles.shiftlabel}>Shift Key :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter shift-key"
          placeholderTextColor="#ccc"
          value={key}
          onChangeText={setKey}
        />
      </View>
      <Text style={styles.label}>Input :</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Message here!"
        placeholderTextColor="#ccc"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.decryptButton} onPress={handleDecrypt}>
        <Text style={styles.buttonText}>Decrypt</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Result :</Text>
      <View style={styles.resultBox}>
        <Text style={styles.result}>{decryptedMessage || "No output available!"}</Text>
        {decryptedMessage ? (
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Text style={styles.copyButtonText}>📋</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#822e2b',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  shiftcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
  },
  shiftlabel: {
    fontSize: 18,
    color: '#ffae00',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: '',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  activeTab: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  inactiveTab: {
    fontSize: 18,
    color: '#999',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
    color: '#ffae00',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputBox: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  decryptButton: {
    backgroundColor: '#33cc33',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  resultBox: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  result: {
    fontSize: 18,
    color: '#2c3e50',
    flex: 1,
  },
  copyButton: {
    padding: 5,
  },
  copyButtonText: {
    fontSize: 16,
    color: '#2c3e50',
  },
});

export default DecryptScreen;
