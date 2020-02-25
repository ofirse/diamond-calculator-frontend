import React from 'react';

const PlayerData = props => {

   const playerData = props.playerData;

    return <div>
        <p> Player Name: {playerData.playerName} </p>
        <p> Player Number: {playerData.playerNumber} </p>
        <p> Player Age: {playerData.playerAge} </p>
        <p> Player Country: {playerData.playerCountry} </p>
    </div>
};

export default PlayerData