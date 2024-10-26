
import PropTypes from 'prop-types';

const Header = ({totalMainBalance}) => {
    return (
        <header className="sticky top-0 bg-white backdrop-blur-md bg-opacity-40 z-50">
            <div className="container mx-auto navbar flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 pr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a ><img className="h-full w-full" src="https://i.imgur.com/aRmFQlW.png" alt="logo..." /></a>
                </div>
                <div className="navbar-end mr-10 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-auto">
                    <a className="btn bg-transparent">{totalMainBalance} Coin <img className="w-8" src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png" alt="coin..." /></a>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    totalMainBalance : PropTypes.number,
}

export default Header;