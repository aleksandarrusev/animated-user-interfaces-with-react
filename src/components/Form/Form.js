import React, {useState} from "react";
import "./Form.css";
import Button from "../Button/Button";

const Form = ({submitTodo}) => {
    const [todoName, setTodoName] = useState('');

    const handleInputChange = (e) => {
        const {value} = e.target;
        value.length > 0 && setTodoName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        todoName.length && submitTodo({name: todoName});
        setTodoName('');
    };

    return <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" value={todoName} onChange={handleInputChange}/>
        <Button>Add todo</Button>
    </form>
};

export default Form;