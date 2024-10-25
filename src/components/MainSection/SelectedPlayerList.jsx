
import PropTypes from 'prop-types'

const SelectedPlayerList = ({player}) => {
    // console.log(player)
    const {name, image, biddingPrice, role} = player
    return (
        <div className="flex justify-between items-center gap-5 bg-gray-100 rounded-xl py-2 px-4">
            <div className="flex gap-3 items-center">
                <img className='w-16 h-16 rounded-full' src={image} alt="Profile..." />
                <div>
                    <h3 className='font-bold text-lg'>{name}</h3>
                    <p>{role}</p>
                    <p>{biddingPrice}</p>
                </div>
            </div>
            <button className="btn px-8 bg-red-200">
                <img className='h-8' src="https://img.icons8.com/?size=100&id=TIoH8Dbt0cSQ&format=png&color=000000" alt="Delete..." />
            </button>
        </div>
    );
};

SelectedPlayerList.propTypes = {
    player: PropTypes.object
}

export default SelectedPlayerList;