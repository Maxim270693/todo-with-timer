import React from 'react';
import {TasksType} from "../../types/types";
import TodoItem from "../todoItem/todoItem";
import Form from "../form/form";

type TodoListType = {
    tasks: TasksType[]
    handleAddTask: (title: string, description: string, timeEnd: string, files: string) => void
}

const TodoList = ({tasks, handleAddTask}: TodoListType) => {
    return (
        <>
            <Form handleAddTask={handleAddTask}/>
            <div className="taskWrapper">
                {
                    tasks.map(task => {
                        return (
                            <TodoItem task={task}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default TodoList;