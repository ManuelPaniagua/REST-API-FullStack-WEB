import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/TasksContext';

const DeleteTask = () => {
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { deleteTask } = useTasks();
    const handleDeleteTask = () => {
        try {
            deleteTask(id);
            enqueueSnackbar('Task deleted successfully', {
                variant: 'success',
            });
            navigate('/task');
            console.log('task deleted');
        } catch (error) {
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
        }
    };

    const handleNo = () => {
        navigate('/task');
    };
    return (
        <div>
            <h1>Sure to delete?</h1>
            <button onClick={handleDeleteTask}>Yes</button>
            <button onClick={handleNo}>No</button>
        </div>
    );
};
export default DeleteTask;
