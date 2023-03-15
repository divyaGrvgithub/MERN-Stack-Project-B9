import { useState } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.title);
    const [description, setDescription] = useState(todo?.description);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, { title: text, description: description }))
    }

    return (
        <li
            className="task"
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo?.title}</span>
            <p style={{ display: editing ? 'none' : '' }}>{todo?.description}</p>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
                <textarea
                    type="text"
                    value={description}
                    className="edit-todo"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input type='submit' value='save' className='button primary' />
            </form>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-edit" />
            </span>
            <span className="icon" onClick={() => dispatch(toggleTodo(todo._id))}>
                <i className="fas fa-check" />
            </span>
        </li>
    )
}

export default Todo;