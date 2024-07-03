import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTasks from './pages/CreateTasks';
import TaskFormPage from './pages/TaskFormPage';
import DeleteTask from './pages/DeleteTask';
import EditTask from './pages/EditTask';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';
import TasksPage from './pages/TasksPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <AuthProvider>
            <TaskProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/register' element={<RegisterPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>

                    <Route element={<ProtectedRoute />}>
                        <Route path='/task' element={<TasksPage />}></Route>
                        <Route
                            path='/task/new'
                            element={<TaskFormPage />}></Route>
                        <Route
                            path='/task/delete/:id'
                            element={<DeleteTask />}></Route>
                        <Route
                            path='/task/edit/:id'
                            element={<EditTask />}></Route>
                        <Route
                            path='/profile'
                            element={<ProfilePage />}></Route>
                    </Route>
                </Routes>
            </TaskProvider>
        </AuthProvider>
    );
};

export default App;
