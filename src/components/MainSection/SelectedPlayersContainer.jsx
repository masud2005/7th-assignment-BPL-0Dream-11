
import PropTypes from 'prop-types'
import SelectedPlayerList from "./SelectedPlayerList";

const SelectedPlayer = ({ choosePlayer, handleRemovePlayer }) => {
    console.log(choosePlayer)
    return (
        <div className="border rounded-lg p-2 md:p-5 grid grid-cols-1 gap-2 md:gap-5">
            {
                choosePlayer.map(player =>
                    <SelectedPlayerList player={player} key={player.playerId} handleRemovePlayer={handleRemovePlayer}></SelectedPlayerList>
                )
            }
        </div>
    );
};

SelectedPlayer.propTypes = {
    choosePlayer: PropTypes.array,
    handleRemovePlayer: PropTypes.func
}

export default SelectedPlayer;