import React from 'react';



const Todo = (props) => {
    return (
        <div id ="text" style={{display: "flex", justifyContent: "left"}}> 
         {/* The original value of compete is fault, but if it changes to true (?) then put a line thru it */}
            <div style={{textDecoration: props.compete ? "line-through" : "" }} onClick={props.toggleComplete}> {props.text} </div>
            <button onClick={props.deleteTodo}>x</button>
        </div>
    )
}

export default Todo;