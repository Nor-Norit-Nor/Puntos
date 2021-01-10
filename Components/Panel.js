import React from 'react';
import {StyleSheet, Dimensions,Button, View} from 'react-native';


export default ({onPressLeft, textLeft, tooglePointsFilter})=> {
	return (
<View style={styles.panel}>
	<Button onPress={onPressLeft} title={textLeft}></Button>
	<Button title="mostrar/ocultar" onPress={tooglePointsFilter}></Button>
</View>
		)
}

const styles = StyleSheet.create({
panel:{
	flex:1,
	flexDirection:"row",
	// backgroundColor:'red' test that is using all the height
	justifyContent:'center',
	alignItems:'center'
}
})