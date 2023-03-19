import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import FlipCardsPage from '../pages/flipCards/FlipCardsPage';
import SignInPage from '../pages/signIn/SignInPage'
import App from '../pages/home/App'
import MemoryBoard from '../pages/memory/MemoryBoard';
import LoginPage from '../pages/login/LoginPage';
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Page404 from '../components/errors/Page404';
import Page403 from '../components/errors/Page403';
import AdminPrivateRoute from './AdminPrivateRoute';
import MainLayout from '../layouts/admin/MainLayout';




const Router = () => {  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/flipcard" element={<FlipCardsPage/>}/>
            <Route path="/login" element= {localStorage.getItem('auth_token') ? <Navigate to="/" /> : <LoginPage/>} />
            <Route path="/signin" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <SignInPage/>} />
            <Route path="/memorycard" element={<MemoryBoard/>}/> 

            <Route path="/admin/*">
                     <Route path='' element={
                       <AdminPrivateRoute>
                            <MainLayout/>
                       </AdminPrivateRoute>} />
                      {/* <Route index element={<Dashboard />}/> */}
                      <Route path="dashboard" element={
                        <AdminPrivateRoute>
                           <Dashboard />
                        </AdminPrivateRoute>} />
                        <Route path="profile" element={
                        <AdminPrivateRoute>
                           <Profile />
                        </AdminPrivateRoute>} />
                        <Route path="" element={
                        <AdminPrivateRoute>
                           <Navigate to='/admin/dashboard'/>
                        </AdminPrivateRoute>} />                                                                     
                        <Route path="*" element={<Page404 />} />
              
            </Route>         
          
            <Route path="*" element={<Page404 />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/403" element={<Page403 />} />

        </Routes>
    </BrowserRouter>
  )
}

export default Router
