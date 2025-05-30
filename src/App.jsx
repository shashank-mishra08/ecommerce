import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from '../src/pages/Home'
import Cart from '../src/pages/Cart'


function App() {


  return (
    <div>

        <div >
          <Navbar/> 
        </div>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>

    </div>
     
  )
}

export default App
