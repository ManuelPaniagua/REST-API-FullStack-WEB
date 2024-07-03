import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useTasks } from '../context/TasksContext';
import { getTaskRequest, updateTaskRequest } from '../api/task';

const EditTask = () => {
    const { getTask } = useTasks();
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        getTask(id);
    }, []);

    const handleEditTask = () => {};
    return (
        <div>
            <h1>Edit Task</h1>
            <div className='addingTask'>
                <label>Name of the Task</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='addingTask'>
                <label>Description</label>
                <textarea
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button onClick={handleEditTask}>Add Task</button>
        </div>
    );
};

export default EditTask;
