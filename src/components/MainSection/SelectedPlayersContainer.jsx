
import PropTypes from 'prop-types'
import SelectedPlayerList from "./SelectedPlayerList";

const SelectedPlayer = ({ choosePlayer }) => {
    console.log(choosePlayer)
    return (
        <div className="border rounded-lg p-5 grid grid-cols-1 gap-5">
            {
                choosePlayer.map(player =>
                    <SelectedPlayerList player={player} key={player.playerId}></SelectedPlayerList>
                )
            }
        </div>
    );
};

SelectedPlayer.propTypes = {
    choosePlayer: PropTypes.array
}

export default SelectedPlayer;