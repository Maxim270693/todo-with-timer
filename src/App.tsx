import React, {useState} from 'react';
import './App.scss';
import TodoList from "./components/todoList/todoList";
import {TasksType} from "./types/types";

function App() {

    const [tasks, setTasks] = useState<TasksType[]>([])

    return (
        <div className="App">
            <TodoList tasks={tasks}/>
        </div>
    );
}

export default App;
