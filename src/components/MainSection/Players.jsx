import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";

const Players = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('playersInfo.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])
    // console.log(players)

    return (
        <div className="container mx-auto px-2">
            <div className="flex justify-between items-center mt-20 mb-10">
                <h1>Available Players</h1>
                <div className="border border-gray-300 rounded-lg gap-0">
                    <button className="bg-lime-300 px-3 py-3 rounded-l-lg">Available</button>
                    <button className="px-3 py-3 rounded-r-lg">Selected(0)</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                {
                    players.map(player => <Player player={player} key={player.playerId}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;