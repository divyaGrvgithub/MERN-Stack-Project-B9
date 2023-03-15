import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");
    const [description, setDescription] = useState('')

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo({ title: text, description: description }));

        setText('');
        setDescription('')
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new Task..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <textarea
                rows="5"
                placeholder="Add Description..."
                className="input"
                onChange={onDescriptionChange}
                value={description}
            />
            <input
                className="button primary"
                type='submit' value='Add Task'
            />
        </form>
    )
}

export default TodoForm;