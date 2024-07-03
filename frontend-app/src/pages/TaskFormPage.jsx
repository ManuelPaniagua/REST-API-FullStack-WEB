import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function TaskFormPage() {
    const { createTask, getTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
        navigate('/task');
    });

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id);
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
                    <label>Name of the Task</label>
                    <input
                        type='text'
                        name='name'
                        {...register('name')}
                        autoFocus
                    />
                    <label>Description</label>
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
