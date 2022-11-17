import React, {ChangeEvent, useState} from 'react';
import Button from "../button/button";
import {TasksType} from "../../types/types";

type TodoItemType = {
    task: TasksType
    handleRemoveTask: (taskId: number) => void
    handleEditTask: (taskId: number, title: string) => void
}

const TodoItem = ({task, handleRemoveTask, handleEditTask}: TodoItemType) => {
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState('');

    const {id, title, timeEnd, description, files} = task;

    const time = timeEnd.replace('T', ' ');

    const removeTask = () => handleRemoveTask(id);
    const changeTaskTitle = () => {
        handleEditTask(id, editTitle)
        setEditMode(!editMode)
    }
    const handleOnEditTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setEditTitle(event.currentTarget.value);
    };

    return (
        <div key={id} className="taskBlock">
            <div className="taskHeader">
                {
                    editMode
                        ? <input type="text"
                                 value={editTitle}
                                 onChange={handleOnEditTitle}
                        />
                        : <h5 className="taskTitle">{title}</h5>
                }
                <div>
                    <Button className="taskBlockBtn" onClick={changeTaskTitle}>edit</Button>
                    {
                        !editMode
                        && <Button className="taskBlockBtn" onClick={removeTask}>x</Button>
                    }
                </div>
            </div>

            <div className="taskTime">{time}</div>
            <div className="taskDesc">{description}</div>
            <div>{files}</div>
        </div>
    );
};

export default TodoItem;