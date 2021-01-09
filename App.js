import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Map, Modal, Panel, Input } from './Components/index';

export default function App() {
const [puntos, setPuntos] = useState([])
const [nombre, setNombre] = useState("")
const [puntoTemp, setPuntoTemp] = useState({})
const [visibility, setVisibility] = useState(false)



const handleLongPress = ({nativeEvent})=> {
  // const newPuntos = puntos.concat({coordinate: nativeEvent.coordinate})
  // setPunto(newPuntos)
  setPuntoTemp(nativeEvent.coordinate)
  setVisibility(true)
  }
  // console.log(puntos)

  const handleChangeText = text => {
    setNombre(text)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel />
      <Modal visibility={visibility}>
    <Input title="Nombre" placeholder="nombre del punto" onChangeText={handleChangeText}></Input>
      </Modal>

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
