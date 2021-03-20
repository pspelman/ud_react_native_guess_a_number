import React from 'react'
import {View, Text, StyleSheet, Button, TextInput, Keyboard, TouchableWithoutFeedback} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors"
import Input from "../components/Input";
import {useState} from "react";

const StartGameScreen = props => {

	const [enteredValue, setEnteredValue] = useState('')

	const numberInputHandler = inputText => {
		// do cleaning of input
		setEnteredValue(inputText.replace(/[^0-9]/g, ''))
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<Input style={styles.input}
				       autoCapitalize={'none'}
				       autoCorrect={false}
				       // keyboardType={'numeric'}
				       keyboardType={'number-pad'}
				       maxLength={2}
				       onChangeText={numberInputHandler}
				       value={enteredValue}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Reset" onPress={() => {}} color={Colors.primary}/>
					</View>
					<View style={styles.button}>
						<Button title="Confirm" onPress={() => {}} color={Colors.accent}/>
					</View>
				</View>
			</Card>
		</View>
		</TouchableWithoutFeedback>
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
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',  // take up the space of the parent container
		justifyContent: 'space-between', // distribute all the available free space between them
		paddingHorizontal: 15  // a little spacing to the left and right of the buttons (so they aren't directly on the edges)
	},
	input: {
		width: 50,
		textAlign: 'center',
	}
})

export default StartGameScreen
