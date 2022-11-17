import React, {ChangeEvent, FormEvent, useState} from 'react';
import Button from "../button/button";

type FormType = {
    handleAddTask: (title: string, description: string, timeEnd: string, files: string) => void
}

const Form = ({handleAddTask}: FormType) => {
    const [formInput, setFormInput] = useState({
        title: '',
        description: '',
        timeEnd: '',
        files: '',
    });

    const [error, setError] = useState('');

    const {title, description, timeEnd, files} = formInput;

    const onChangeInputsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFormInput(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
        setError('');
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!title) {
            return setError('Поле Заголовок не может быть пустым')
        } else if (!description) {
            return setError('Поле Описание не может быть пустым')
        } else if (!timeEnd) {
            return setError('Поле Время не может быть пустым')
        }

        handleAddTask(title, description, timeEnd, files)
        setFormInput({
            title: '',
            description: '',
            timeEnd: '',
            files: '',
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text"
                   name="title"
                   placeholder="Enter the Title..."
                   value={title}
                   onChange={onChangeInputsHandler}
            />
            <input type="text"
                   name="description"
                   placeholder="Enter the Description..."
                   value={description}
                   onChange={onChangeInputsHandler}
            />
            <input type="datetime-local"
                   name="timeEnd"
                   placeholder="Enter the Description..."
                   value={(timeEnd || '').toString().substring(0, 16)}
                   onChange={onChangeInputsHandler}
            />
            <input type="file"
            />

            {error && <div className="errorMessage">{error}</div>}

            <Button className="btn"
                    onClick={() => {
                    }}
            >
                add
            </Button>
        </form>
    );
};

export default Form;