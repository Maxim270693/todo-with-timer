import React from 'react';
import {TasksType} from "../../types/types";
import TodoItem from "../todoItem/todoItem";
import Form from "../form/form";

type TodoListType = {
    tasks: TasksType[]
    handleAddTask: (title: string, description: string, timeEnd: string, files: string) => void
    handleRemoveTask: (taskId: number) => void
    handleEditTask: (taskId: number, title: string) => void
}

const TodoList = ({tasks, handleAddTask, handleRemoveTask, handleEditTask}: TodoListType) => {
    return (
        <>
            <Form handleAddTask={handleAddTask}/>
            <div className="taskWrapper">
                {
                    tasks.map(task => {
                        return (
                            <TodoItem task={task}
                                      handleRemoveTask={handleRemoveTask}
                                      handleEditTask={handleEditTask}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};

export default TodoList;