import { View, Text, SafeAreaView, StatusBar, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import MusicList from './src/component/MusicList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayMusic from './src/component/PlayMusic';
import { play } from 'react-native-track-player/lib/trackPlayer';
LogBox.ignoreAllLogs()
export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MusicList" component={MusicList} />
        <Stack.Screen name="PlayMusic" component={PlayMusic} />
        <Stack.Screen name="play" component={play} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}