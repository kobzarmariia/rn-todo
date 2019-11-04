import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, addGoalHandler } from 'react-native';

const GoalInput = ({ visible, onAddGoal, onCancelGoalAddition }) => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoal);
		setEnteredGoal('');
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" color="pink" onPress={onCancelGoalAddition} />
					</View>
					<View style={styles.button}>
						<Button title="Add!" onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%',
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
	},
	button: {
		width: '40%',
	},
});

export default GoalInput;
