import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Registration/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
