import React from 'react';
import Button from "../button/button";
import {TasksType} from "../../types/types";

type TodoItemType = {
    task: TasksType
    handleRemoveTask: (taskId: number) => void
}

const TodoItem = ({task, handleRemoveTask}: TodoItemType) => {
    const {id, title, timeEnd, description, files} = task;

    const time = timeEnd.replace('T', ' ');

    const removeTask = () => handleRemoveTask(id);

    return (
        <div key={id} className="taskBlock">
            <div className="taskHeader">
                <h5 className="taskTitle">{title}</h5>
                <div>
                    <Button className="taskBlockBtn" onClick={() => {
                    }}>edit</Button>
                    <Button className="taskBlockBtn" onClick={removeTask}>x</Button>
                </div>
            </div>

            <div className="taskTime">{time}</div>
            <div className="taskDesc">{description}</div>
            <div>{files}</div>
        </div>
    );
};

export default TodoItem;