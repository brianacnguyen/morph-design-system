import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Primary Button',
  onClick: () => console.log('Button clicked!'),
};
