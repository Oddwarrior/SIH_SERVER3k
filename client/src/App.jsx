import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Dashboard from './componenets/dashboard';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/clients' element={<div>clients</div>} />
          <Route path='/cases' element={<div>cases</div>} />
          <Route path='/tasks' element={<div>tasks</div>} />
          <Route path='/appointments' element={<div>appointments</div>} />
        </Route >
        <Route path='/login' element={<div>Login</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
