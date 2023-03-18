import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FlipCardsPage from '../pages/flipCards/FlipCardsPage';
import SignInPage from '../pages/signIn/SignInPage'
import App from '../pages/home/App'
import MemoryBoard from '../pages/memory/MemoryBoard';
import LoginPage from '../pages/login/LoginPage';
import MainLayout from '../layouts/admin/MainLayout';
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';



const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/flipcard" element={<FlipCardsPage/>}/>
            <Route path="/login" element= {localStorage.getItem('auth_token') ? <Navigate to="/" /> : <LoginPage/>} />
            <Route path="/signin" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <SignInPage/>} />
            <Route path="/memorycard" element={<MemoryBoard/>}/> 
            <Route path="/admin" element={<MainLayout/>}>
                        <Route path="/admin/dashboard" element={<Dashboard />}/> 
                        <Route path="/admin/profile" element={<Profile />}/> 
                        <Route path='/admin' element={<Navigate to='/admin/dashboard'/>} />
            </Route>


        </Routes>
    </BrowserRouter>
  )
}

export default Router
