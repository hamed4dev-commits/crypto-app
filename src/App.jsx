
import { Route, Routes } from 'react-router'
import './App.css'
import Hompage from './components/pages/Hompage'
import Market from './components/pages/Market'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<Hompage />} />
        <Route path='/market' element={<Market />} />
      </Routes>
    </>
  )
}

export default App
