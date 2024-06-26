import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { darkTheme } from '../../theme';

const meta = {
	title: 'components/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		text: 'Hello World',
	},
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
