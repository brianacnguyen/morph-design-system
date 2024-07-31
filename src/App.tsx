import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';

console.log('index.tsx is being executed at the top');
console.log('index.tsx file is being executed');

const App: React.FC = () => {
  console.log('App component is rendering');
  return (
    <div>
      <h1>Button Component</h1>
      <Button label="Click Me" onClick={() => console.log('Button clicked')} />
    </div>
  );
};

const renderApp = () => {
  console.log('renderApp function is executing');
  const rootElement = window.document.getElementById('root');
  if (rootElement) {
    console.log('Root element found, rendering App component');
    ReactDOM.render(<App />, rootElement);
  } else {
    console.log('Root element not found');
  }
};

console.log('Starting application');
renderApp();
console.log('Application started');
