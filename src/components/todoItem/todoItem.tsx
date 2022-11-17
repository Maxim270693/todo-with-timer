import React from 'react';
import Button from "../button/button";
import {TasksType} from "../../types/types";

type TodoItemType = {
    task: TasksType
}

const TodoItem = ({task}: TodoItemType) => {
    const {id, title, timeEnd, description, files} = task;

    const time = timeEnd.replace('T', ' ');

    return (
        <div key={id} className="taskBlock">
            <div className="taskHeader">
                <h5 className="taskTitle">{title}</h5>
                <div>
                    <Button onClick={() => {
                    }}>edit</Button>
                    <Button onClick={() => {
                    }}>x</Button>
                </div>
            </div>

            <div className="taskTime">{time}</div>
            <div className="taskDesc">{description}</div>
            <div>{files}</div>
        </div>
    );
};

export default TodoItem;