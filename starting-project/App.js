import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
	}

	function deleteGoalHandler(text) {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal !== text);
		});
	}

	return (
		<View style={styles.appContainer}>
			<Button
				title="Add New Goal"
				color="#5e0acc"
				onPress={startAddGoalHandler}
			/>
			<GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem item={itemData.item} deleteGoal={deleteGoalHandler} />
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
	goalsContainer: {
		flex: 4,
	},
});
