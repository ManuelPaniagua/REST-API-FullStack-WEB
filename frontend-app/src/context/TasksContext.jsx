import { createContext, useContext, useState } from 'react';
import { createTaskRequest } from '../api/task';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};

export function TaskProvider({ children }) {
    //To save tasks in frontend
    const [tasks, setTasks] = useState([]);

    // to save the tasks in backend
    const createTask = async (task) => {
        const res = await createTaskRequest(task);
        console.log(res);
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
            }}>
            {children}
        </TaskContext.Provider>
    );
}
