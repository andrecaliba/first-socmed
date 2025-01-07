import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/protected/Home';
import Admin from './pages/protected/Admin';
import ProtectedRoutes from './pages/utils/ProtectedRoutes';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Registration/>} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
