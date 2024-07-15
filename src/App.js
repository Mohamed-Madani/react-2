// src/App.js
import React from 'react';
import './App.css';
import PlayersList from './component/PlayerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIFA Player Cards</h1>
      </header>
      <PlayersList />
    </div>
  );
}

export default App;
