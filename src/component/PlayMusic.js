import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

export default function PlayMusic({ navigation, route }) {
  const [audioList, setAudioList] = useState([]);
  const [isPlayerReady, setIsPlayerReady] = useState([]);
  const [AudioPlay, setAudioPlay] = useState();
  const { id } = route.params;

 

  

  const getAudio = () => {
    let formData = new FormData();
    formData.append('catId', `${id}`);

    fetch('http://veepal.co.in/savitri-mission/category/audio_track', {
      method: 'POST',
      headers: {
        'Cookie': 'ci_session=898abadd3c6236dd0edba20324bf09ea441d0f91',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => setAudioList(res?.data))
      .catch((error) => console.log(error));
  };

  const start = async (url, image) => {
    try {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      const isPlaying = await TrackPlayer.getState() === TrackPlayer.STATE_PLAYING;
  
      if (currentTrack === '1' && isPlaying) {
        // If the same track is already playing, stop the playback
        await TrackPlayer.stop();
      } else {
        // Stop the previous track and reset the player
        await TrackPlayer.reset();
  
        // Add the selected track to the queue
        await TrackPlayer.add({
          id: '1',
          url: url,
          title: 'Track Title',
          artist: 'Track Artist',
          artwork: image,
        });
  
        // Start playing it
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Error handling audio:', error);
    }
  };
  

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 10,
          // padding: 10
        }}
       
        // onPress={() => { navigation.navigate('play') }}
      >
        <Image style={{ height: 60, width: 60 }} resizeMode='cover' source={{ uri: item.catImage }} />
        <Text style={{ marginLeft: 20, fontWeight: '600', alignSelf: 'center' }}>{item.catName}</Text>
        <TouchableOpacity 
        style={{alignSelf:'center',marginLeft:10}} 
        onPress={() => {
          setAudioPlay(item?.audioTrackId)
          start(item?.audioName, item?.catImage);
        }}>
          <Image style={{height:20,width:20}} source={AudioPlay==item?.audioTrackId?require('../assets/play.png'):require('../assets/pause.png')}/>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getAudio();
  }, []); // Fetch audio when the component mounts

  return (
    <View style={styles.container}>
      
        <FlatList data={audioList} renderItem={renderItem} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});
