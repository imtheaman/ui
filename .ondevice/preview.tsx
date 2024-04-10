import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'primary',
			values: [
				{ name: 'Background.Gray', value: '#1C1A1F' },
				{ name: 'Background.Black', value: '#0E0E0E' },
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [withBackgrounds],
};

export default preview;
