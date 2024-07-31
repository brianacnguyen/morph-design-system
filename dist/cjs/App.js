"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Button_1 = __importDefault(require("./components/Button"));
console.log('index.tsx is being executed at the top');
console.log('index.tsx file is being executed');
const App = () => {
    console.log('App component is rendering');
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Button Component"),
        react_1.default.createElement(Button_1.default, { label: "Click Me", onClick: () => console.log('Button clicked') })));
};
const renderApp = () => {
    console.log('renderApp function is executing');
    const rootElement = window.document.getElementById('root');
    if (rootElement) {
        console.log('Root element found, rendering App component');
        react_dom_1.default.render(react_1.default.createElement(App, null), rootElement);
    }
    else {
        console.log('Root element not found');
    }
};
console.log('Starting application');
renderApp();
console.log('Application started');
//# sourceMappingURL=App.js.map