import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/dashboard' element={<div>dashboard</div>} />
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
