
import PropTypes from 'prop-types';

const Player = ({ player, handleChoosePlayer }) => {
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-[240px] lg:h-[260px] 2xl:h-[275px]" src={image} alt="Player..." />
            </figure>
            <div className="card-body">
                <div className="flex gap-3">
                    <img src="https://img.icons8.com/?size=50&id=7819&format=png" alt="Profile" />
                    <h2 className="card-title">{name}</h2>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                        <img src="https://img.icons8.com/?size=48&id=TyDZNgOeTyqW&format=png" alt="Bangladesh..." />
                        <p className='md:text-base'>{country}</p>
                    </div>
                    <button className="btn min-h-10 h-0">{role}</button>
                </div>
                <hr />
                <p className="mt-4 md:text-base">Rating</p>
                <div className="flex justify-between items-center">
                    <p className='md:text-base'>{battingType}</p>
                    <div>
                        <p className="text-gray-500 md:text-base">{bowlingType}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className='md:text-base'>Price: ${biddingPrice}</p>
                    <button onClick={() => handleChoosePlayer(player)} className="btn min-h-10 h-0 md:text-base">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    handleChoosePlayer: PropTypes.func,
}

export default Player;