import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import { Map, Modal, Panel, Input, List } from './Components/index';

export default function App() {
const [puntos, setPuntos] = useState([])
const [nombre, setNombre] = useState("")
const [puntoTemp, setPuntoTemp] = useState({})
const [visibility, setVisibility] = useState(false)
const [visibilityFilter, setVisibilityFilter] = useState("new_punto")




const handleLongPress = ({nativeEvent})=> {
  // const newPuntos = puntos.concat({coordinate: nativeEvent.coordinate})
  // setPunto(newPuntos)
  setVisibilityFilter('new_punto')
  setPuntoTemp(nativeEvent.coordinate)
  setVisibility(true)
  }
  // console.log(puntos)

  const handleChangeText = text => {
    setNombre(text)
  }
  const handleSubmit = ()=>{
    const newPunto= {coordinate:puntoTemp, name:nombre};
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre("")
  }
  // console.log(puntos);

  const handleLista = ()=>{
    setVisibilityFilter('all_puntos');
    setVisibility(true)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel onPressLeft={handleLista} textLeft='Lista'/>
      <Modal visibility={visibility}>
    {visibilityFilter === 'new_punto' 
    ? 
    <View style={styles.form}>
    <Input title="Nombre" placeholder="nombre del punto" onChangeText={handleChangeText}></Input>
    <Button title="Aceptar" onPress={handleSubmit}></Button> 
     </View>: 
<List puntos={puntos} closeModal={()=> setVisibility(false)}/>}
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
  form:{
    padding:20
  }


});
