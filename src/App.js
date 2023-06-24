import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import CarDetail from './pages/CarDetail/CarDetail'
import Cart from './pages/Cart/Cart'
import Advertise from './pages/Advertise'
import EditCar from './pages/EditCar'
import Home from './pages/Home'
import Inventory from './pages/Inventory/Inventory'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search/Search'

//hooks
import { useAuthentication } from './hooks/useAuthentication';
import { useStateContext } from './context/ContextProvider';

export default function App() {

  //manipulando loading
  const {user,setUser} = useStateContext()
  const { auth } = useAuthentication()
  const loadingUser = user === undefined
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, [auth])
  
  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detail/:id' element={<CarDetail />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/search?q=' element={<Search />} />

          {/*LOGADO*/}
          <Route path='/advertise' element={user ? <Advertise /> : <Navigate to="/login" />}  />
          <Route path='/edit-car' element={user ? <EditCar /> : <Navigate to="/login" />}/>

          {/*NÃO LOGADO */}
          <Route path='/login' element={!user ?  <Login /> : <Navigate to="/" />} />
          <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
