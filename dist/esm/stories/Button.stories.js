import React from 'react';
import Button from '../components/Button';
export default {
    title: 'Example/Button',
    component: Button,
};
const Template = (args) => React.createElement(Button, Object.assign({}, args));
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    label: 'Primary Button',
    onClick: () => console.log('Button clicked!'),
};
//# sourceMappingURL=Button.stories.js.map