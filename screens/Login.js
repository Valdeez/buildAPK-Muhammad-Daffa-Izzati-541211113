import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import UserInput from '../components/UserInput';
import PassInput from '../components/PassInput';
import CustomButton from '../components/CustomButton';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
          <Text style={styles.signon}>Sign In</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signoff}>Sign Up</Text>
        </Pressable>
      </View>
      <Image style={styles.logo} source={require('../assets/valdez.jpg')} />
      <Text style={styles.title}>Halo lagi!</Text>
      <Text style={styles.paragraph}>Silahkan login terlebih dahulu</Text>
      <UserInput/>
      <PassInput/>
      <Text style={styles.bellow}>Lupa password?</Text>
      <CustomButton text='SIGN IN' nav={() => navigation.navigate('Porto')}/>
      <Text style={styles.separator}>Atau</Text>
      <View style={styles.logoList}>
        <Image style={styles.otherLogo} source={require('../assets/google.png')} />
        <Image style={styles.otherLogo} source={require('../assets/facebook.png')} />
        <Image style={styles.otherLogo} source={require('../assets/instagram.png')} />
      </View>
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
  bellow: {
    textAlign: 'right',
    color: 'grey',
    marginTop: 12,
  },
  separator: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 24
  },
  logoList: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otherLogo: {
    marginHorizontal: 10,
    height: 35,
    width: 35,
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
