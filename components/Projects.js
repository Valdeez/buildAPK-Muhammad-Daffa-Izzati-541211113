import { Text, View, StyleSheet, Image } from 'react-native';
import VoteButton from './VoteButton';

export default function Projects({ src, name }) {
  return (
    <View>
      <Image style={styles.project} source={src} />
      <View style={styles.projectTitle}>
        <View style={{width: '50%',}}>
          <Text style={styles.projectName}>{name}</Text>
        </View>
        <VoteButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  project: {
    marginTop: 16,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 300,
  },
  projectTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectName: {
    paddingTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#222',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 32,
  },
})