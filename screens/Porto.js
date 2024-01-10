import { Text, View, StyleSheet, Image, Alert, Pressable, ScrollView, Linking } from 'react-native';
import Projects from '../components/Projects';

export default function Porto() {
  const contactAlert = () =>
    Alert.alert('My Contact', 'Email: m.daffaizzati@gmail.com Phone Number: +62-882-3871-5345', [
      {
        text: 'Back',
        style: 'cancel',
      },
      {text: 'Okay'},
    ]);
  const githubLink = () => {
    Linking.openURL('https://github.com/Valdeez');
  };
  const instaLink = () => {
    Linking.openURL('https://www.instagram.com/dapadeez.json/');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.profile} source={require('../assets/dapa.jpg')} />
        <Text style={styles.name}>Muhammad Daffa Izzati</Text>
        <Text style={styles.subname}>Web Developer</Text>
        <Text style={styles.separator}></Text>
        <Text style={styles.title}>About</Text>
        <Text style={styles.about}>
          Halo, saya Muhammad Daffa Izzati. Saya adalah seorang siswa kelas 12 di sekolah SMK Telkom Purwokerto. Saat ini saya sedang mempelajari React Native.
        </Text>
        <Pressable 
        style={({pressed}) => [styles.contact, {backgroundColor: pressed ? '#ddd' : '#222'}]}
        onPress={contactAlert}>
          <Text style={styles.buttonText}>Contact Me</Text>
        </Pressable>
        <Text style={styles.separator}></Text>
        <Text style={styles.title}>My Project</Text>
        <Projects src={require('../assets/1-infografis.png')} name='Web Infografis' />
        <Projects src={require('../assets/2-simaksosmas.png')} name='SIMAKSOSMAS' />
        <Projects src={require('../assets/3-dmovie.png')} name='D-Movie' />
        <Text style={styles.separator}></Text>
        <Text style={styles.title}>Follow Me</Text>
        <View style={styles.socialList}>
          <Pressable 
          style={({pressed}) => [styles.social, {backgroundColor: pressed ? '#ddd' : '#fff'}]}
          onPress={instaLink}>
            <Image style={styles.socialLogo} source={require('../assets/instagram.png')} />
            <Text style={styles.socialText}>dapadeez</Text>
          </Pressable>
          <Pressable 
          style={({pressed}) => [styles.social, {backgroundColor: pressed ? '#ddd' : '#fff'}]}
          onPress={githubLink}>
            <Image style={styles.socialLogo} source={require('../assets/github.png')} />
            <Text style={styles.socialText}>Valdeez</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ecf0f1',
    paddingTop: 64,
  },
  name: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subname: {
    marginTop: 8,
    fontSize: 16,
    color: 'grey',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  about: {
    marginTop: 8,
    fontSize: 16,
    color: 'grey',
    fontWeight: 'normal',
    textAlign: 'justify',
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  profile: {
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#222',
    height: 156,
    width: 156,
  },
  contact: {
    marginTop: 16,
    backgroundColor: '#222',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 7
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  socialList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  social: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: 'white',
    height: 40,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  socialText: {
    color: 'black',
    marginLeft: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialLogo: {
    width: 25,
    height: 25,
  }
});
