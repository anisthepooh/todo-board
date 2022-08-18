import React from 'react'
import { v4 as uuidv4 } from "uuid";

function Form({setInputText, inputText, todos, setTodos}) {

    // Set the inputText to the result of the inputfield. 
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };


    // Updates the todos array with the inputed text 
    const submitTodoHandler = (e) => {
        // Prevents refreshing the browser when the button is clicked
        e.preventDefault();
        setTodos([
            ...todos,{
                text: inputText, 
                id: uuidv4()
            }
        ]);
        setInputText("");
    };





  return (
        <form className='form'>
            <input 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
            value={inputText} 
            placeholder='New task'/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
  );
}

export default Form