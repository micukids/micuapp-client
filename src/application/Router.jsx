import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlipCardsPage from '../pages/flipCards/FlipCardsPage';
import App from '../pages/home/App'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/flipcard" element={<FlipCardsPage/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Router
