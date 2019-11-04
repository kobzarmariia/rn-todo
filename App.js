import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => [...currentGoals.filter(item => item.id != goalId)]);
	};

	const addGoalHandler = enteredGoal => {
		if (enteredGoal.trim().length === 0) {
			return;
		}
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), value: enteredGoal },
		]);
		setIsAddMode(false);
	};

	const cancelGoalAdditionHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput
				visible={isAddMode}
				onAddGoal={addGoalHandler}
				onCancelGoalAddition={cancelGoalAdditionHandler}
			/>
			<FlatList
				data={courseGoals}
				keyExtractor={(item, index) => item.id}
				renderItem={itemData => (
					<GoalItem
						itemData={itemData.item.value}
						onRemoveGoal={removeGoalHandler}
						id={itemData.item.id}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingVertical: 50,
		paddingHorizontal: 30,
		flex: 1,
	},
});
