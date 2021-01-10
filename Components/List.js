import React from 'react';
import {FlatList, Text, View, Button, StyleSheet, Dimensions} from 'react-native';

export default ({puntos, closeModal})=>{
	return(
		<>
		<View style={styles.list}>
		<FlatList 
		data={puntos.map(x => x.name)}
		renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
		keyExtractor={item =>item}
		></FlatList>
		</View>
		<View style={styles.button}>
			<Button title="Cerrar" onPress={closeModal}></Button>
		</View>
		</>
	)
}
const styles = StyleSheet.create({
	list:{
		height:Dimensions.get('window').height-250
	},
	item:{
		borderColor:'#ccc',
		height:50,
		justifyContent:'center',
		padding:15
	},
	button:{
		paddingBottom:15
	}
})