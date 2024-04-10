const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function generateBoilerplate(fileName) {
	const story = `import type { Meta, StoryObj } from "@storybook/react";
import { ${fileName}} from "./${fileName}";

const meta = {
    title: "components/${fileName}",
    component: ${fileName},
} satisfies Meta<typeof ${fileName}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
    },
};`;

	const component = `import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ${fileName + 'Props'}= {
};

const stylesheet = createStyleSheet({
});

export const ${fileName} = ({}: ${fileName + 'Props'}) => {
	const { styles } = useStyles(stylesheet);

	return <View>
		</View>;
};
`;

	const test = '';

	return {
		story,
		component,
		test,
	};
}

function createFile(fileName, content) {
	fs.writeFileSync(fileName, content, err => {
		if (err) {
			throw err;
		}
		console.log(`${fileName} created successfully!`);
	});
}

function promptUserAndGenerateFiles() {
	let files = [];
	rl.question('Enter component name: ', name => {
		files.push(name);
		const boilerplateContents = generateBoilerplate(name);
		createFile(`${name}.stories.tsx`, boilerplateContents.story);
		createFile(`${name}.tsx`, boilerplateContents.component);
		createFile(`${name}.spec.tsx`, boilerplateContents.test);
		rl.close();
	});
}

promptUserAndGenerateFiles();
