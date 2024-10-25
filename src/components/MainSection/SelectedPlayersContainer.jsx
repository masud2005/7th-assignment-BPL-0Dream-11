
import PropTypes from 'prop-types'
import SelectedPlayerList from "./SelectedPlayerList";

const SelectedPlayersContainer = ({ choosePlayer, handleRemovePlayer, handleActiveState}) => {
    return (
        <>
            <div className="border rounded-lg p-2 md:p-5 grid grid-cols-1 gap-2 md:gap-5">
                {
                    choosePlayer.map(player =>
                        <SelectedPlayerList player={player} key={player.playerId} handleRemovePlayer={handleRemovePlayer}></SelectedPlayerList>
                    )
                }
            </div>
            <button onClick={() => handleActiveState('available')} className="btn mt-8 bg-lime-300 rounded-xl border-none px-8 text-base md:text-lg md:font-bold border">Add More Player</button>
        </>
    );
};

SelectedPlayersContainer.propTypes = {
    choosePlayer: PropTypes.array,
    handleRemovePlayer: PropTypes.func,
    handleActiveState: PropTypes.func,
    isActive: PropTypes.string
}

export default SelectedPlayersContainer;