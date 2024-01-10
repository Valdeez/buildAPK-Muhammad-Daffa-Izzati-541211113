import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import UserInput from '../components/UserInput';
import PassInput from '../components/PassInput';
import CustomButton from '../components/CustomButton';

export default function Register({ navigation }) {
  const [name, conPassword, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
        <View style={styles.option}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signoff}>Sign In</Text>
          </Pressable>
          <Text style={styles.signon}>Sign Up</Text>
        </View>
      <Image style={styles.logo} source={require('../assets/valdez.jpg')} />
      <Text style={styles.title}>Selamat datang!</Text>
      <Text style={styles.paragraph}>Silahkan register terlebih dahulu</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
        placeholder="Nama lengkap.."
      />
      <UserInput/>
      <PassInput/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={conPassword}
        secureTextEntry={true}
        placeholder="Konfirmasi password.."
      />
      <CustomButton text='SIGN UP' nav={() => navigation.navigate('Porto')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    marginTop: 8,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph: {
    marginTop: 8,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 15,
  },
  input: {
    height: 45,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey',
    padding: 10,
  },
  option: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 3,
    marginVertical: 24,
    height: 42,
    borderColor: '#222',
    borderWidth: 2,
    borderRadius: 12,
  },
  signoff: {
    textAlign: 'right',
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'grey',
  },
  signon: {
    textAlign: 'right',
    backgroundColor: '#222',
    color: 'white',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
  }
});
