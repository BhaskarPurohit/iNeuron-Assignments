// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header'
import Content from './Content'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
      <Header/>
      <Content/>
    </div>
    </ThemeProvider>
  );
}

export default App;
