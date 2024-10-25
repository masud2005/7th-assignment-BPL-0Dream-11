
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
  const handleChoosePlayer = () => {
    console.log("choose player btn clicked");
  }

  return (
    <>
      {/* Header */}
      <Header freeAddMoney={freeAddMoney}></Header>
      <Banner handleFreeAddMoney={handleFreeAddMoney}></Banner>
      <Players 
        handleActiveState={handleActiveState}
        isActive={isActive}
        handleChoosePlayer={handleChoosePlayer}
      ></Players>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
