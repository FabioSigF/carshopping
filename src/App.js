import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import CarDetail from './pages/CarDetail/CarDetail'
import Cart from './pages/Cart/Cart'
import CreateCar from './pages/CreateCar'
import Dashboard from './pages/Dashboard'
import EditCar from './pages/EditCar'
import Home from './pages/Home'
import Inventory from './pages/Inventory/Inventory'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search/Search'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detail/:id' element={<CarDetail />}/>
          <Route path='/inventory' element={<Inventory />}/>
          <Route path='/search?q=' element={<Search />} />

          {/*LOGADO*/}
          <Route path='/create-car' element={<CreateCar />} /*cond p login *//>
          <Route path='/dashboard' element={<Dashboard />} /*cond p login */ />
          <Route path='/edit-car' element={<EditCar />} /*cond p login */ />
          
          {/*NÃO LOGADO */}
          <Route path='/login' element={<Login />} /*cond p login *//>
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
