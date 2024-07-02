import { useEffect } from 'react';
import { useTasks } from '../context/TasksContext';
import TasksCard from '../Home/TasksCard';
import { Link } from 'react-router-dom';

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);
    if (tasks.length === 0) return <h1>No Tasks</h1>;

    return (
        <div>
            <h1 style={{ marginBottom: '10px' }}>List of Tasks</h1>
            <Link to='/task/new'>
                <button>Add new Task</button>
            </Link>
            <TasksCard tasks={tasks} />
        </div>
    );
}

export default TasksPage;
