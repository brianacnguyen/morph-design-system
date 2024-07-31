import { lightTheme } from '@metamask/design-tokens';
import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const buttonStyle = {
    backgroundColor: lightTheme.colors.primary.default,
    color: lightTheme.colors.text.default,
    fontFamily: lightTheme.typography.sHeadingSM.fontFamily,
    fontSize: `${lightTheme.typography.sHeadingSM.fontSize}px`,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
