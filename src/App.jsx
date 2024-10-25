
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/MainSection/Players'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  return (
    <>
      {/* Header */}
      <Header></Header>
      <Banner></Banner>
      <Players></Players>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
