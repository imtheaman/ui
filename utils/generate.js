const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function generateBoilerplate(fileName) {
	const story = `import type { Meta, StoryObj } from "@storybook/react";
import ${fileName} from "./${fileName}";

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

export type ${fileName + 'Props'} = {
};

const stylesheet = createStyleSheet({
});

export default function ${fileName}({ }: ${fileName + 'Props'}) {
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

function createDirectory(directoryName) {
	fs.mkdirSync(directoryName, { recursive: true });
}

function createFile(directoryName, fileName, content) {
	const directoryPath = path.join(__dirname, '../components/', directoryName);
	const filePath = path.join(directoryPath, fileName);
	fs.writeFileSync(filePath, content, err => {
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
		createDirectory(path.join('components', name));
		const boilerplateContents = generateBoilerplate(name);
		createFile(name, `${name}.stories.tsx`, boilerplateContents.story);
		createFile(name, `${name}.tsx`, boilerplateContents.component);
		createFile(name, `${name}.spec.tsx`, boilerplateContents.test);
		rl.close();
	});
}

promptUserAndGenerateFiles();
