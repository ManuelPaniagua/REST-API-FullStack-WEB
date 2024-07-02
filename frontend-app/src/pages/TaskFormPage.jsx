import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { createTaskRequest } from '../api/task';
import { useNavigate } from 'react-router-dom';

function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTasks();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
        navigate('/task');
    });
    return (
        <div>
            <h1>Create Task</h1>
            <form onSubmit={onSubmit}>
                <div className='addingTask'>
                    <label>Name of the Task</label>
                    <input type='text' {...register('name')} autoFocus />
                    <label>Description</label>
                    <textarea
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
