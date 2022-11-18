import React, {ChangeEvent, useState} from 'react';
import {ImageUrlType, TasksType} from "../../types/types";
import TodoItem from "../todoItem/todoItem";
import Form from "../form/form";

type TodoListType = {
    tasks: TasksType[]
    handleAddTask: (title: string, description: string, timeEnd: string) => void
    handleRemoveTask: (taskId: number) => void
    handleEditTask: (taskId: number, title: string) => void
    handleChangeStatus: (taskId: number, isDone: boolean) => void
}

const TodoList = ({
                      tasks,
                      handleAddTask,
                      handleRemoveTask,
                      handleEditTask,
                      handleChangeStatus
                  }: TodoListType) => {
    const [imageURL, setImageURL] = useState<ImageUrlType>();

    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImageURL({
                image: URL.createObjectURL(img),
                file: img
            });
        }
    };

    return (
        <>
            <Form handleAddTask={handleAddTask}
                  onImageChange={onImageChange}
            />

            <div className="taskWrapper">
                {
                    tasks.map(task => {
                        return (
                            <TodoItem task={task}
                                      handleRemoveTask={handleRemoveTask}
                                      handleEditTask={handleEditTask}
                                      handleChangeStatus={handleChangeStatus}
                                      imageURL={imageURL}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};

export default TodoList;