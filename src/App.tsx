import React, {useState} from 'react';
import './App.scss';
import TodoList from "./components/todoList/todoList";
import {TasksType} from "./types/types";

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([])

    const handleAddTask = (title: string, description: string, timeEnd: string, files: string) => {
        const newTask: TasksType = {
            id: (new Date()).getTime(),
            title: title.trim(),
            description,
            timeEnd,
            files,
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

    return (
        <div className="App">
            <TodoList tasks={tasks}
                      handleAddTask={handleAddTask}
                      handleRemoveTask={handleRemoveTask}
                      handleEditTask={handleEditTask}
            />
        </div>
    );
}

export default App;
