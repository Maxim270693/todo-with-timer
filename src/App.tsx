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

    return (
        <div className="App">
            <TodoList tasks={tasks}
                      handleAddTask={handleAddTask}
            />
        </div>
    );
}

export default App;
