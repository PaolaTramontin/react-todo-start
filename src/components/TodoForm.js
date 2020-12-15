import React, { useState } from 'react';
import shortid from 'shortid';
import "../css/TodoForm.css";



const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('')

    const handleChange = event => {
        setText(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: shortid.generate(),
            text: text,
            compete: false
        })
    }
        return(
            <form onSubmit={handleSubmit}>
                <input name="text" value={text} onChange={handleChange} placeholder="todo..."/>
                <button onSubmit={handleSubmit}>Add Todo</button>
            </form>
        )
}



export default TodoForm