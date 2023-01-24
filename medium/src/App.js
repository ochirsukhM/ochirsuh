import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import News from './components/News';
import { useState } from 'react';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Admin from "./components/Admin";
import AdminDash from './components/AdminDash';
import Users from './components/Users';
import AddUser from './components/AddUser';
import MainLayout from './components/MainLayout';
import NewsDetail from './components/NewsDetail';




function App() {

  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/newsdetails/:id" element={<News/>} />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route element={<Admin/>}>
          <Route index path="/admin" element={<AdminDash/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/adduser" element={<AddUser/>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
