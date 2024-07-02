import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { createTaskRequest } from '../api/task';

function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTasks();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
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
