import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlipCardsPage from "../pages/flipCards/FlipCardsPage";
import SignInPage from "../pages/signIn/SignInPage";
import App from "../pages/home/App";
import MemoryBoard from "../pages/memory/MemoryBoard";
import LoginPage from "../pages/login/LoginPage";
import Dashboard from "../components/admin/Dashboard";
import Page404 from "../components/errors/Page404";
import AdminPrivateRoute from './AdminPrivateRoute'
import MainLayout from "../layouts/admin/MainLayout";
import Letters from "../components/admin/Letters";
import Suggestions from "../components/admin/Suggestions";
import Downloads from "../components/admin/Downloads";
import EditLetter from "../components/admin/EditLetter";
import ParentsPage from '../pages/parents/ParentsPage';
import SoundGameBoard from "../pages/soundgame/SoundGameBoard";
import Contact from "../pages/contact/Contact";
import Credits from "../pages/credits/Credits";
import UserProtectedRoute from "./UserProtectedRoute";
import ContactMessages from "../components/admin/ContactMessages";
import EditSuggestion from "../components/admin/EditSuggestion";
import EditDownload from "../components/admin/EditDownload";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parapadres" element={<ParentsPage/>}/> 
        <Route element={<UserProtectedRoute />}>
            <Route path="/flipcard" element={<FlipCardsPage />}/>
            <Route path="/memorycard" element={<MemoryBoard />} />
            <Route path="/soundcard" element={<SoundGameBoard />}/>
        </Route>
        <Route
          path="/login"
          element={
            localStorage.getItem("auth_token") ? (
              <Navigate to="/" />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/signin"
          element={
            localStorage.getItem("auth_token") ? (
              <Navigate to="/" />
            ) : (
              <SignInPage />
            )
          }
        />

        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/credits" element={<Credits/>}/> 

        <Route element={<AdminPrivateRoute />}>
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/letters" element={<Letters />} />
            <Route path="/admin/letter/:id" element={<EditLetter />} />
            <Route path="/admin/suggestions" element={<Suggestions />} />
            <Route path="/admin/suggestion/:id" element={<EditSuggestion />} />
            <Route path="/admin/downloads" element={<Downloads />} />
            <Route path="/admin/download/:id" element={<EditDownload />} />
            <Route path="/admin/messages" element={<ContactMessages />} />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
