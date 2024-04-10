import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';
import { darkTheme } from '../../theme';

const meta = {
	title: 'components/TextInput',
	component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {},
	argTypes: {
		color: {
			options: Object.keys(darkTheme.colors),
			mapping: darkTheme.colors,
			control: {
				type: 'select',
			},
		},
	},
};
