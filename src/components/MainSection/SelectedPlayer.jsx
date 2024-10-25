

const SelectedPlayer = () => {
    return (
        <div className="border bg-gray-100 rounded-lg p-5 flex justify-between items-center">
            <div className="flex justify-between items-center gap-5">
                <img src="" alt="Profile..." />
                <div>
                    <h3>Players name</h3>
                    <p>Batting</p>
                </div>
            </div>
            <button className="btn">Delete Icon</button>
        </div>
    );
};

export default SelectedPlayer;