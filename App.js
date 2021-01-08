import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Map, Modal, Panel } from './Components/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <Panel />
      <Modal/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },


});
