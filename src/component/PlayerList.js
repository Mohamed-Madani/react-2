// src/PlayersList.js
import React from 'react';
import PlayerCard from './PlayerCard';
import Players from './Players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Players.map(player => (
        <PlayerCard key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
