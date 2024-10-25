
import PropTypes from 'prop-types'
import SelectedPlayerList from "./SelectedPlayerList";

const SelectedPlayer = ({ choosePlayer, handleRemovePlayer, handleAddMoreBtn, isActive }) => {
    // console.log(choosePlayer)
    return (
        <>

            <div className="border rounded-lg p-2 md:p-5 grid grid-cols-1 gap-2 md:gap-5">
                {
                    choosePlayer.map(player =>
                        <SelectedPlayerList player={player} key={player.playerId} handleRemovePlayer={handleRemovePlayer}></SelectedPlayerList>
                    )
                }
            </div>
            {/* <div className="bg-transparent p-1 border rounded-xl"> */}
            <button onClick={() => handleAddMoreBtn(isActive)} className="btn mt-8 bg-lime-300 rounded-xl border-none px-8 text-base md:text-lg md:font-bold border">Add More Player</button>
            {/* </div> */}
        </>
    );
};

SelectedPlayer.propTypes = {
    choosePlayer: PropTypes.array,
    handleRemovePlayer: PropTypes.func,
    handleAddMoreBtn: PropTypes.func,
    isActive: PropTypes.string
}

export default SelectedPlayer;