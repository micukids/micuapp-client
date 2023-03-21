import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FlipCardsPage from '../pages/flipCards/FlipCardsPage';
import SignInPage from '../pages/signIn/SignInPage'
import App from '../pages/home/App'
import MemoryBoard from '../pages/memory/MemoryBoard';
import LoginPage from '../pages/login/LoginPage';
import ParentsPage from '../pages/parents/ParentsPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/flipcard" element={<FlipCardsPage/>}/>
            <Route path="/login" element= {localStorage.getItem('auth_token') ? <Navigate to="/" /> : <LoginPage/>} />
            <Route path="/signin" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <SignInPage/>} />
            <Route path="/memorycard" element={<MemoryBoard/>}/> 
            <Route path="/parapadres" element={<ParentsPage/>}/> 

        </Routes>
    </BrowserRouter>
  )
}

export default Router
