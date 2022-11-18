import React, {useState} from 'react';
import './App.scss';
import TodoList from "./components/todoList/todoList";
import {TasksType} from "./types/types";

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([])

    const handleAddTask = (title: string, description: string, timeEnd: string) => {
        const newTask: TasksType = {
            id: (new Date()).getTime(),
            title: title.trim(),
            isDone: true,
            description,
            timeEnd,
        }

        setTasks([...tasks, newTask])
    }
    const handleRemoveTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => task.id !== taskId);
        setTasks(filteredTasks);
    }
    const handleEditTask = (taskId: number, title: string) => {
        const changeTaskTitle = tasks.map(task => task.id === taskId
            ? {...task, title: title.trim()}
            : task
        )

        setTasks(changeTaskTitle)
    }
    const handleChangeStatus = (taskId: number, isDone: boolean) => {
        const changeTaskStatus = tasks.map(task => task.id === taskId
            ? {...task, isDone: !isDone}
            : task
        )

        setTasks(changeTaskStatus)
    }

    return (
        <div className="App">
            <TodoList tasks={tasks}
                      handleAddTask={handleAddTask}
                      handleRemoveTask={handleRemoveTask}
                      handleEditTask={handleEditTask}
                      handleChangeStatus={handleChangeStatus}
            />
        </div>
    );
}

export default App;
