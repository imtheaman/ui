import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ButtonProps = {
	onPress: () => void;
	text: string;
	color?: string;
	textColor?: string;
};

const stylesheet = createStyleSheet(theme => {
	console.log('THEME', Object.keys(theme));
	return {
		button: {
			paddingVertical: 8,
			paddingHorizontal: 16,
			borderRadius: 4,
			alignSelf: 'flex-start',
			flexGrow: 0,
			backgroundColor: theme.colors.primary,
		},
		buttonText: {
			color: 'white',
			fontSize: 16,
			fontWeight: 'bold',
		},
		buttonContainer: {
			alignItems: 'flex-start',
			flex: 1,
		},
	};
});

const MyButton = ({ text, onPress, color, textColor }: ButtonProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity
				style={[styles.button, !!color && { backgroundColor: color }]}
				onPress={onPress}
				activeOpacity={0.8}>
				<Text
					style={[
						styles.buttonText,
						!!textColor && { color: textColor },
					]}>
					{text}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MyButton;
