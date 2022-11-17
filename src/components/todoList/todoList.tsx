import React from 'react';
import {TasksType} from "../../types/types";
import Button from '../button/button';

type TodoListType = {
    tasks: TasksType[]
}

const TodoList = ({tasks}: TodoListType) => {
    return (
        <>
            <div>
                <input type="text"/>
                <Button onClick={() => {}}>add</Button>
            </div>

            <div className="taskWrapper">
                {
                    tasks.map(task => {
                        const {id, title, timeEnd, description, files} = task;

                        return (
                            <div key={id} className="taskBlock">
                                <div className="taskHeader">
                                    <div>{title}</div>
                                    <div>
                                        <Button onClick={() => {}}>edit</Button>
                                        <Button onClick={() => {}}>x</Button>
                                    </div>
                                </div>

                                <div>{timeEnd}</div>
                                <div>{description}</div>
                                <div>{files}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default TodoList;