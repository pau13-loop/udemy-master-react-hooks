import { useEffect, useState } from "react";
import uuid from 'uuid/v4';

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

const storeTasks = ({ tasks, completedTasks }) => {
    localStorage.setItem(
        TASKS_STORAGE_KEY,
        JSON.stringify({ tasks, completedTasks })
    );
}

const readStoredTasks = () => {
    const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
    return tasksMap ? tasksMap : { tasks: [], completedTasks: [] };
}

function Tasks() {
    const [taskText, setTaskText] = useState('');
    const storedTasks = readStoredTasks();
    const [tasks, setTasks] = useState(storedTasks.tasks);
    const [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks);

    useEffect(() => {
        console.log("storedTasks: ", storedTasks);
    }, [storedTasks]);

    useEffect(() => {
        storeTasks({ tasks, completedTasks });
    });

    const updateTaskText = (event) => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        setTasks([...tasks, { taskText, id: uuid() }]);
    }

    const completeTask = completedTask => () => {
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task.id !== completedTask.id));
    }

    const delteTask = task => () => {
        setCompletedTasks(completedTasks.filter(t => t.id !== task.id));
    }

    console.log('tasks', tasks);
    console.log('completedTasks', completedTasks);

    return (
        <div>
            <h3>Tasks</h3>
            <div className="form">
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="task-list">
                {
                    tasks.map(task => {
                        const { id, taskText } = task;
                        return <div key={id} onClick={completeTask(task)}>{taskText}</div>
                    })
                }
            </div>
            <div className="completed-list">
                {
                    completedTasks.map(task => {
                        const { id, taskText } = task;

                        return (
                            <div key={id}>{taskText}{'   '}
                                <span className="delete-task" onClick={delteTask(task)}>x</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Tasks;