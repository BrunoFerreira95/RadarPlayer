import React from 'react';

import './styles.css';

function PlayerItem( {player} ){

    return (
        <li className="player-item">
            <header>
              <img src={player.profile.avatar} alt={player.profile.personaname}/>
              <div className="user-info">
                <strong>{player.profile.personaname}</strong>
                <p>Wins: {player.win} Losses: {player.lose}</p>
                <a href={player.profile.profileurl}>Acessar perfil na Steam</a>
              </div>
            </header>
          </li>
    );
}

export default PlayerItem;