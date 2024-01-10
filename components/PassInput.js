import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function PassInput() {
  const [password, onChangeText] = React.useState('');

  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={password}
        secureTextEntry={true}
        placeholder="Password.."
        keyboardType="text"
      />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey',
    padding: 10,
  },
})