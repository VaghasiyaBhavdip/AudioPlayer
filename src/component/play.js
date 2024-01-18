import { View, Text } from 'react-native'
import React from 'react'

export default function play({route}) {
    // let {audio}=route.params
    // console.log('audio',audio);
    // const start = async () => {
    //     // Set up the player
    //     await TrackPlayer.setupPlayer();
    
    //     // Add a track to the queue
    //     await TrackPlayer.add({
    //         id: 'trackId',
    //         url: require('track.mp3'),
    //         title: 'Track Title',
    //         artist: 'Track Artist',
    //         artwork: require('track.png')
    //     });
    
    //     // Start playing it
    //     await TrackPlayer.play();
    // };
    // start();
  return (
    <View>
      <Text>play</Text>
    </View>
  )
}