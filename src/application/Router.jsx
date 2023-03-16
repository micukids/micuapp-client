import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlipCardsPage from '../pages/flipCards/FlipCardsPage';
import SignInPage from '../pages/signIn/SignInPage'
import App from '../pages/home/App'
import MemoryBoard from '../pages/memory/MemoryBoard';
import LoginPage from '../pages/login/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/flipcard" element={<FlipCardsPage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/memorycard" element={<MemoryBoard/>}/> 

        </Routes>
    </BrowserRouter>
  )
}

export default Router
