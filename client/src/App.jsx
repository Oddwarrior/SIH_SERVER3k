import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Dashboard from './componenets/dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { useUser } from './utils/usercontext';


function App() {
  const { user, setUser } = useUser();
  // setUser(false);

  return (
    <BrowserRouter>
      <Routes>
        {!user ? <Route >
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Route> :
          <Route path='/' element={<Home />} >
            <Route index element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/clients' element={<div>clients</div>} />
            <Route path='/cases' element={<div>cases</div>} />
            <Route path='/tasks' element={<div>tasks</div>} />
            <Route path='/appointments' element={<div>appointments</div>} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route >}
      </Routes>
    </BrowserRouter>
  )
}

export default App
