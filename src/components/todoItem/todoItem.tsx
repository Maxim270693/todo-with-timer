import React, {ChangeEvent, useEffect, useState} from 'react';
import Button from "../button/button";
import {ImageUrlType, TasksType} from "../../types/types";
import dayjs from "dayjs";

type TodoItemType = {
    task: TasksType
    handleRemoveTask: (taskId: number) => void
    handleEditTask: (taskId: number, title: string) => void
    handleChangeStatus: (taskId: number, isDone: boolean) => void
    imageURL?: ImageUrlType
}

const TodoItem = ({
                      task,
                      handleRemoveTask,
                      handleEditTask,
                      handleChangeStatus,
                      imageURL
                  }: TodoItemType) => {
    const {id, title, isDone, timeEnd, description} = task;

    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString().slice(0, 5));

    const removeTask = () => handleRemoveTask(id);
    const changeTaskTitle = () => {
        handleEditTask(id, editTitle)
        setEditMode(!editMode)
    };
    const handleOnEditTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setEditTitle(event.currentTarget.value);
    };
    const handleChangeTaskStatus = () => handleChangeStatus(id, isDone);

    const day = dayjs();
    const fullDay = day.format('YYYY-MM-DD');

    const time = timeEnd.replace('T', ' ');
    const fullDate = `${fullDay} ${currentTime}`;
    const isCorrectTime = time >= fullDate;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString('ru-RU').slice(0, 5))
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div key={id} className={!isCorrectTime || !isDone ? "taskBlockItem" : "taskBlock"}>
            <div className="taskHeader">
                {
                    editMode
                        ? <input type="text"
                                 value={editTitle}
                                 onChange={handleOnEditTitle}
                        />
                        : <h5 className="taskTitle">{title}</h5>
                }

                <div className="taskButtons">
                    <Button className="taskBlockBtn"
                            onClick={changeTaskTitle}
                    >
                        edit
                    </Button>

                    {
                        !editMode &&
                        <>
                            <Button className="taskBlockBtn" onClick={removeTask}>
                                x
                            </Button>
                            <Button className="taskBlockBtn"
                                    disabled={!isCorrectTime}
                                    onClick={handleChangeTaskStatus}
                            >
                                {!isDone ? "Выполнено" : "Не Выполнено"}
                            </Button>
                        </>
                    }
                </div>
            </div>

            <div className="taskTime">{time}</div>
            <div className="taskDesc">{description}</div>
            <div>
                <img src={imageURL ? imageURL.image : ''}
                     alt="photo"
                     className="imageWrapper"
                />
            </div>
        </div>
    );
};

export default TodoItem;