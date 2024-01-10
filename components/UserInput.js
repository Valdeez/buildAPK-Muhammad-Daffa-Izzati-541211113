import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function UserInput() {
  const [username, onChangeText] = React.useState('');

  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username.."
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