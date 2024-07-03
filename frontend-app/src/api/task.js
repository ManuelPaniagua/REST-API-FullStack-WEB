import axios from './axios';

export const getTasksRequest = async () => axios.get('/task');

export const createTaskRequest = async (task) => axios.post('/task', task);

export const updateTaskRequest = async (id, task) =>
    axios.put(`/task/${id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/task/${id}`);

export const getTaskRequest = async (id) => axios.get(`/task/${id}`);
