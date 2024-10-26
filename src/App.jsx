
import { ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/MainSection/Players'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  const [totalMainBalance, setTotalMainBalance] = useState(0);
  const [isActive, setIsActive] = useState('available');
  const [choosePlayer, setChoosePlayer] = useState([]);

  // Free Add Money Functionality
  const handleFreeAddMoney = () => {
    const newFreeAddMoney = totalMainBalance + 4500000;
    setTotalMainBalance(newFreeAddMoney);
    toast.success('Credit Added to your Account');
  }

  // Btn toggle functionality
  const handleActiveState = (status) => {
    setIsActive(status);
  }

  // Choose Player Functionality
  const handleChoosePlayer = (player) => {
    const totalBalance = totalMainBalance > player.biddingPrice;
    const isExist = choosePlayer.find(singlePlayer => singlePlayer.playerId === player.playerId);
    const isPlayersLimit = choosePlayer.length >= 6;

    if (isExist) {
      // alert("Player already selected!")
      toast.error('Player already selected!');
      return;
    }

    if (isPlayersLimit) {
      // alert('Your cannot add more than 6 players!');
      toast.error('Your cannot add more than 6 players!');
      return;
    }

    if (totalBalance) {
      const currentTotalBalance = totalMainBalance - player.biddingPrice;
      setTotalMainBalance(currentTotalBalance);
      setChoosePlayer([...choosePlayer, player]);
      toast.success(`Congrats!! ${player.name} is now in your squad.`);
    }
    else {
      // alert('Insufficient balance! Please add funds to proceed.');
      toast.error('Insufficient balance! Please add funds to proceed.');
    }
  }

  // Remove Btn functionality 
  const handleRemovePlayer = (playerId) => {
    const remainingPlayers = choosePlayer.filter(player => player.playerId !== playerId);
    setChoosePlayer(remainingPlayers);
    toast.info('Player remove successfully.');

    // Total Main Balance Decrement
    // const updatedBalance = choosePlayer.find(player => player.playerId === playerId);
    // const currentTotalBalance = totalMainBalance + updatedBalance.biddingPrice;
    // setTotalMainBalance(currentTotalBalance);
  }


  return (
    <>
      {/* Header Section*/}
      <Header totalMainBalance={totalMainBalance}></Header>

      {/* Banner Section*/}
      <Banner handleFreeAddMoney={handleFreeAddMoney}></Banner>

      {/* Players Section */}
      <Players
        handleActiveState={handleActiveState}
        isActive={isActive}
        handleChoosePlayer={handleChoosePlayer}
        choosePlayer={choosePlayer}
        handleRemovePlayer={handleRemovePlayer}
      ></Players>

      {/* Subscribe Section */}
      <Subscribe></Subscribe>

      {/* Footer Section */}
      <Footer></Footer>

      {/* React Toastify */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

export default App;
