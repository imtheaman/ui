import React from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import './unistyles';

const stylesheet = createStyleSheet({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

function App() {
	const { styles } = useStyles(stylesheet);
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	);
}

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED) {
	AppEntryPoint = require('./.ondevice').default;
}

export default AppEntryPoint;
