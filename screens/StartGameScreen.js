import React from 'react'
import {View, Text, StyleSheet, Button, TextInput} from "react-native";

const StartGameScreen = props => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game</Text>
			<View style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<TextInput/>
				<View style={styles.buttonContainer}>
					<Button title="Reset" onPress={()=>{}}/>
					<Button title="Confirm" onPress={()=>{}}/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',  // if the device is too small, we make sure the width doesn't exceed 80%
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2},
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 8,  // this is android only
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		// borderBottomLeftRadius: 25,
		// borderTopRightRadius: 25
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',  // take up the space of the parent container
		justifyContent: 'space-between', // distribute all the available free space between them
		paddingHorizontal: 15  // a little spacing to the left and right of the buttons (so they aren't directly on the edges)
	}
})

export default StartGameScreen
