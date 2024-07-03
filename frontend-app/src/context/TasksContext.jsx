import { createContext, useContext, useState } from 'react';
import {
    createTaskRequest,
    getTasksRequest,
    deleteTaskRequest,
    updateTaskRequest,
    getTaskRequest,
} from '../api/task';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};

export function TaskProvider({ children }) {
    // To save tasks in frontend
    const [tasks, setTasks] = useState([]);

    // to get all  tasks
    const getTasks = async (task) => {
        try {
            const res = await getTasksRequest(task);
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // to get one task by id
    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    // to save the tasks in backend
    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    // to delete
    const deleteTask = async (id) => {
        try {
            await deleteTaskRequest(id);
        } catch (error) {
            console.log(error);
        }
    };

    // to update
    const updateTask = async (id) => {
        try {
            const res = await updateTaskRequest(id);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                getTasks,
                deleteTask,
                updateTask,
                getTask,
            }}>
            {children}
        </TaskContext.Provider>
    );
}
