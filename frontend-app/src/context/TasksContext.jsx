import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};

// to save the tasks in backend

export function TaskProvider({ children }) {
    //To save tasks in frontend
    const [tasks, setTasks] = useState([]);
    return (
        <TaskContext.Provider
            value={{
                tasks,
            }}>
            {children}
        </TaskContext.Provider>
    );
}
