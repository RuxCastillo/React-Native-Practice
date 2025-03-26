import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your course goal!"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<Button title="Add goal" onPress={addGoalHandler} />
				<Button title="Cancel" />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderColor: '#cccccc',
		borderWidth: 1,
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
});

export default GoalInput;
