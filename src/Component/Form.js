import React from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, tasks, setTasks}) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, {id: uuidv4(), title: input, active: false, curtime:0 }]);
        setInput("");
    };
    return(
        <form onSubmit={onFormSubmit}>
            <h3>To Add a task : press enter or click add button</h3>
            <input type="text" 
            placeholder="Enter a Task.." 
            className="task-input"
            value={input}
            required
            onChange={onInputChange}
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    );
};
export default Form;