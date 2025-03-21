import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculatrice Moderne</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>Créé avec React</p>
      </footer>
    </div>
  );
}

export default App; 