import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
} from 'react-native';

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
		setEnteredGoalText('');
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your course goal!"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<Button title="Add goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<View style={styles.goalItem}>
								<Text style={styles.white}>{itemData.item}</Text>
							</View>
						);
					}}
					keyExtractor={(item, index) => {
						return index;
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		height: '100%',
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	goalsContainer: {
		flex: 4,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		color: 'white',
	},
	white: {
		color: 'white',
	},
});
