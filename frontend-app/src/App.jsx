import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTasks from './pages/CreateTasks';
import DeleteTask from './pages/DeleteTask';
import EditTask from './pages/EditTask';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>

                <Route path='/task/new' element={<CreateTasks />}></Route>
                <Route path='/task/delete/:id' element={<DeleteTask />}></Route>
                <Route path='/task/edit/:id' element={<EditTask />}></Route>
                <Route path='/profile' element={<ProfilePage />}></Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;
