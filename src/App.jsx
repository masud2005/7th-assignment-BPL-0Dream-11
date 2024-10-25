
import { ToastContainer, toast, Bounce, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/MainSection/Players'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  const [freeAddMoney, setFreeAddMoney] = useState(0);
  const [isActive, setIsActive] = useState('available');
  const [choosePlayer, setChoosePlayer] = useState([]);

  // Free Add Money Functionality
  const handleFreeAddMoney = () => {
    // console.log('free add money clicked');
    const newFreeAddMoney = freeAddMoney + 4500000;
    setFreeAddMoney(newFreeAddMoney);
  }

  // Btn toggle functionality
  const handleActiveState = (status) => {
    setIsActive(status);
  }

  // Choose Player Functionality
  const handleChoosePlayer = (player) => {
    // console.log(player);
    const totalBalance = freeAddMoney > player.biddingPrice;
    const isExist = choosePlayer.find(singlePlayer => singlePlayer.playerId === player.playerId);
    const isPlayersLimit = choosePlayer.length >= 6;

    if (isExist) {
      // alert("Player already selected!")
      toast.error('Player already selected!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    if (isPlayersLimit) {
      // alert('Your cannot add more than 6 players!');
      toast.error('Your cannot add more than 6 players!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    if (totalBalance) {
      // console.log('amake add kora jabe');
      const currentTotalBalance = freeAddMoney - player.biddingPrice;
      setFreeAddMoney(currentTotalBalance);
      setChoosePlayer([...choosePlayer, player]);
    }
    else {
      // alert('Insufficient balance! Please add funds to proceed.');
      toast.error('Insufficient balance! Please add funds to proceed.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }

  // Remove Btn functionality 
  const handleRemovePlayer = (playerId) => {
    // console.log(playerId);
    const remainingPlayers = choosePlayer.filter(player => player.playerId !== playerId);
    // console.log(remainingPlayers);
    setChoosePlayer(remainingPlayers);

    const updatedBalance = choosePlayer.find(player => player.playerId === playerId);
    const currentTotalBalance = freeAddMoney + updatedBalance.biddingPrice;
    setFreeAddMoney(currentTotalBalance);
  }

  // Add More Btn Functionality
  const handleAddMoreBtn = (available) => {
    // console.log('handle add more btn clicked');
    setIsActive(available);
  }

  return (
    <>
      {/* Header Section*/}
      <Header freeAddMoney={freeAddMoney}></Header>

      {/* Banner Section*/}
      <Banner handleFreeAddMoney={handleFreeAddMoney}></Banner>

      {/* Players Section */}
      <Players
        handleActiveState={handleActiveState}
        isActive={isActive}
        handleChoosePlayer={handleChoosePlayer}
        choosePlayer={choosePlayer}
        handleRemovePlayer={handleRemovePlayer}
        handleAddMoreBtn={handleAddMoreBtn}
      ></Players>

      {/* Subscribe Section */}
      <Subscribe></Subscribe>

      {/* Footer Section */}
      <Footer></Footer>

      {/* React Toastify */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

export default App
