import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
	function deleteGoalHandler() {
		props.deleteGoal(props.item);
	}

	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={deleteGoalHandler}
				android_ripple={{ color: '#cccccc' }}
			>
				<Text style={styles.white}>{props.item}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		color: 'white',
	},
	white: {
		color: 'white',
		padding: 8,
	},
});

export default GoalItem;
