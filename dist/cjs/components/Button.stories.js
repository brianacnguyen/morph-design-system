"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryButton = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../components/Button"));
exports.default = {
    title: 'Example/Button',
    component: Button_1.default,
};
const Template = (args) => react_1.default.createElement(Button_1.default, Object.assign({}, args));
exports.PrimaryButton = Template.bind({});
exports.PrimaryButton.args = {
    label: 'Primary Button',
    onClick: () => console.log('Button clicked!'),
};
//# sourceMappingURL=Button.stories.js.map