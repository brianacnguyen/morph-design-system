"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const design_tokens_1 = require("@metamask/design-tokens");
const react_1 = __importDefault(require("react"));
const Button = ({ label, onClick }) => {
    const buttonStyle = {
        backgroundColor: design_tokens_1.lightTheme.colors.primary.default,
        color: design_tokens_1.lightTheme.colors.text.default,
        fontFamily: design_tokens_1.lightTheme.typography.sHeadingSM.fontFamily,
        fontSize: `${design_tokens_1.lightTheme.typography.sHeadingSM.fontSize}px`,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };
    return (react_1.default.createElement("button", { style: buttonStyle, onClick: onClick }, label));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map