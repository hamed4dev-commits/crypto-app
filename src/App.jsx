
import { Route, Routes } from 'react-router'
import './App.css'
import Hompage from './components/pages/Hompage'
import Market from './components/pages/Market'
import CoinDetails from './components/pages/CoinDetails'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<Hompage />} />
        <Route path='/market' element={<Market />} />
        <Route path='/market/:id' element={<CoinDetails />} />
      </Routes>
    </>
  )
}

export default App
