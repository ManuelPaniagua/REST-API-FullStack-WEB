import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';

function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const { tasks } = useTasks();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
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
