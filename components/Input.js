import React from "react"
import {TextInput, StyleSheet} from "react-native"

const Input = props => {
	return <TextInput {...props} style={{...styles.input, ...props.style}} />
}

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10, // spacing to top and bottom

	}
})

export default Input
