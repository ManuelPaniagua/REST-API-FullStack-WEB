import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useTasks } from '../context/TasksContext';

const EditTask = () => {
    const { getTask } = useTasks();
    const { register, handleSubmit, setValue } = useForm();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        async function loadTask() {
            const task = await getTask(id);
            console.log(id);
            console.log(task);
            setValue('name', task.name);
            setValue('description', task.description);
        }
        loadTask();
    }, []);

    const handleEditTask = () => {};
    return (
        <div>
            <h1>Edit Task</h1>
            <div className='addingTask'>
                <label>Name of the Task</label>
                <input type='text' value={name} />
            </div>
            <div className='addingTask'>
                <label>Description</label>
                <textarea type='text' value={description} />
            </div>
            <button onClick={handleEditTask}>Add Task</button>
        </div>
    );
};

export default EditTask;
