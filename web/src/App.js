import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import './Sidebar.css';
import './global.css';
import './Main.css';

import PlayerForm from './components/PlayerForm';
import PlayerItem from './components/PlayerItem';

function App() {
  const[players, setPlayers] = useState([]);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get('/players');

      setPlayers(response.data);
    }

    loadPlayers();
  }, []);

  async function handleAddPlayer(data) {
    const response = await api.post('./players', data);

    setPlayers([...players, response.data]);
  } 
  return (
    <div className="App">
      <aside>
        <strong>Le DotA Group</strong>
        <PlayerForm onSubmit={handleAddPlayer}/>
      </aside>
      <main>
      <ul>
        {players.map( player => (
          <PlayerItem key={player._id} player={player} />
        ))}
      </ul>
     </main>
    </div>
  );
}

export default App;
