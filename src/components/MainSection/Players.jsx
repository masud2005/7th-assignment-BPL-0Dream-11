
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";
import SelectedPlayersContainer from './SelectedPlayersContainer';

const Players = ({handleActiveState, isActive, handleChoosePlayer, choosePlayer, handleRemovePlayer}) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('playersInfo.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])

    return (
        <div className="container mx-auto px-2">
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-20 mb-10">
                <h1 className='font-bold text-xl'>
                    {isActive === 'available'&& `Available Players (${players.length})`}
                    {isActive === 'selected' && `Selected Players (${choosePlayer.length}/6)`}
                </h1>
                <div className="border border-gray-300 rounded-lg gap-0 mt-2 md:mt-0">
                    <button onClick={() => handleActiveState('available')} className={`${isActive === 'available' ? 'bg-lime-300' : ''} text-base px-[6px] md:px-3 py-3 rounded-l-lg`}>Available</button>
                    <button onClick={() => handleActiveState('selected')} className={`${isActive === 'selected' ? 'bg-lime-300' : ''} text-base px-[6px] md:px-3 py-3 rounded-r-lg`}>Selected({choosePlayer.length})</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                {
                    players.map(player => 
                        isActive === 'available' && <Player player={player} key={player.playerId} handleChoosePlayer={handleChoosePlayer}></Player>
                    )
                }
            </div>
            {
                isActive === 'selected' && <SelectedPlayersContainer choosePlayer={choosePlayer} handleRemovePlayer={handleRemovePlayer} handleActiveState={handleActiveState}> isActive={isActive}</SelectedPlayersContainer>
            }
        </div>
    );
};

Players.propTypes = {
    handleActiveState : PropTypes.func,
    isActive : PropTypes.string,
    handleChoosePlayer: PropTypes.func,
    choosePlayer: PropTypes.array,
    handleRemovePlayer: PropTypes.func,
}

export default Players;