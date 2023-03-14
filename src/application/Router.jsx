import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import Layout from '../components/layout/Layout'; */
import FlipCardsPage from '../pages/flipCards/FlipCardsPage';
import SignInPage from '../pages/signIn/SignInPage'
import App from '../pages/home/App'
import axios from 'axios';

axios.defaults.withCredentials = true;

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/flipcard" element={<FlipCardsPage/>}/>
            <Route path="/register" element={<SignInPage/>}/>
           {/*  <Route element={<Layout/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router
