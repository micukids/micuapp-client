import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import FlipCardsPage from '../pages/flipCards/FlipCardsPage';
import App from '../pages/home/App'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/flipcards" element={<FlipCardsPage/>}/>
            <Route element={<Layout/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
