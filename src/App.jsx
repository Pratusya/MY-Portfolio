import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;