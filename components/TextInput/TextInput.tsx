import React from 'react';
import { TextInput } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type TextInputProps = {};

const stylesheet = createStyleSheet(theme => ({
	input: {
		borderColor: theme.colors.primary,
		borderWidth: theme.borderWidth.bold,
	},
}));

export default function MyTextInput({}: TextInputProps) {
	const { styles } = useStyles(stylesheet);

	return <TextInput style={styles.input} />;
}
