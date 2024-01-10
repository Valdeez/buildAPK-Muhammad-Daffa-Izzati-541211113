import { Text, Pressable, StyleSheet, View } from 'react-native';

export default function CustomButton({ text, nav }) {
  return (
    <View>
      <Pressable 
      style={({pressed}) => [styles.press, {backgroundColor: pressed ? '#ddd' : '#222'}]}
      onPress={nav}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  press: {
    marginTop: 24,
    backgroundColor: '#222',
    height: 40,
    justifyContent: 'center',
    borderRadius: 7
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})