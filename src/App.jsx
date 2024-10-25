
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
    if(totalBalance){
      // console.log('amake add kora jabe');
      const currentTotalBalance = freeAddMoney - player.biddingPrice;
      setFreeAddMoney(currentTotalBalance);
      setChoosePlayer([...choosePlayer, player]);
    }
    else{
      alert('amar porjopto balance nai!');
    }
  }
  // console.log(choosePlayer);

  return (
    <>
      {/* Header */}
      <Header freeAddMoney={freeAddMoney}></Header>
      <Banner handleFreeAddMoney={handleFreeAddMoney}></Banner>
      <Players 
        handleActiveState={handleActiveState}
        isActive={isActive}
        handleChoosePlayer={handleChoosePlayer}
        choosePlayer={choosePlayer}
      ></Players>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
