import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function TaskFormPage() {
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        if (id) {
            updateTask(id, data);
            navigate('/task');
        } else {
            createTask(data);
            navigate('/task');
        }
    });

    useEffect(() => {
        const loadTask = async () => {
            if (id) {
                const task = await getTask(id);
                setValue('name', task.name);
                setValue('description', task.description);
                // setValue("completed", task.completed);
            }
        };
        loadTask();
    }, []);

    return (
        <div>
            <h1>Create Task</h1>
            <form onSubmit={onSubmit}>
                <div className='addingTask'>
                    {errors.name && (
                        <p className='errors-form'>
                            Name of the task is Required
                        </p>
                    )}
                    <label htmlFor='name'>Name of the Task</label>
                    <input
                        type='text'
                        name='name'
                        {...register('name', { required: true })}
                        autoFocus
                    />
                    <label htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        rows='3'
                        {...register('description')}
                        id=''></textarea>
                </div>
                <button>Save</button>
            </form>
        </div>
    );
}

export default TaskFormPage;
