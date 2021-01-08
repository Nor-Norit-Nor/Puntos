import React from 'react';
import {StyleSheet, Dimensions,Button, View} from 'react-native';


export default ()=> {
	return (
<View style={styles.panel}>
	<Button title="lista"></Button>
	<Button title="mostrar/ocultar"></Button>
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