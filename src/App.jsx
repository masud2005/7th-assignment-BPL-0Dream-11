
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/MainSection/Players'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  const [freeAddMoney, setFreeAddMoney] = useState(0);

  const handleFreeAddMoney = () => {
    console.log('free add money clicked');
    const newFreeAddMoney = freeAddMoney + 4500000;
    setFreeAddMoney(newFreeAddMoney);
  }

  return (
    <>
      {/* Header */}
      <Header freeAddMoney={freeAddMoney}></Header>
      <Banner handleFreeAddMoney={handleFreeAddMoney}></Banner>
      <Players></Players>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
