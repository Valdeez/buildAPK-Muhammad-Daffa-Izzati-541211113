import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function VoteButton() {
  const [likeCount, setLikeCount] = React.useState(0);
  const [dislikeCount, setDislikeCount] = React.useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  }
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  }

  return (
    <View style={styles.projectVote}>
      <Pressable 
      onPress = {handleLike}
      style={({pressed}) => [{borderRadius: 15}, {backgroundColor: pressed ? '#ddd' : '#ecf0f1'}]}>
        <AntDesign name="upcircleo" size={26} color="#222" />
      </Pressable>
      <Text style={{marginRight: 10, marginLeft: 5}}>{likeCount}</Text>
      <Pressable 
      onPress = {handleDislike}
      style={({pressed}) => [{borderRadius: 15}, {backgroundColor: pressed ? '#ddd' : '#ecf0f1'}]}>
        <AntDesign name="downcircleo" size={26} color="#222" />
      </Pressable>
      <Text style={{marginLeft: 5}}>{dislikeCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  projectVote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
})