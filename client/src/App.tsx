import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/(auth)/Login'
import Register from './pages/(auth)/Register'
import Notfound from './pages/Notfound'
import Auth from './pages/(auth)/Auth'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Route>
      <Route path='/auth' element={<Auth />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App