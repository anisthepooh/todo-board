import React, { useState, useEffect} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './Styling/Board.css'; 
import Form from './Form';
import Navbar from './Navbar';
import TodoList from './TodoList';
import { v4 as uuidv4 } from "uuid";
import ListForm from './ListForm';
import Credit from './Credit';




function Board() {

  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);






//Save data local

  useEffect(() => {
    getLocalTodos();},
    []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
    };
    

    // Save the updated number of cards
    const todosLength = todos.length; 

/*
    const addColumn = (e) => {
      // Prevents refreshing the browser when the button is clicked
      e.preventDefault();
      setColumn([
          ...column,{
              text: "hello"
              id:  uuidv4(),
              key: uuidv4()
          }
      ]);
  };
*/



  return (
    
      <div className="App">
        
        <header>
          <h1 className='heading'> WELCOME! </h1>
        </header>
        <div className='count-wrapper'>
          <h2> {todosLength} tasks left to do!</h2>
        </div>
        <div className='form-wrapper'>
              <Form 
              setInputText={setInputText}  
              inputText={inputText} 
              todos={todos} 
              setTodos={setTodos}
              />
            </div>
        <div>

        </div>
          <TodoList 
          todos={todos} 
          setTodos={setTodos}
          setInputText={setInputText}  
          inputText={inputText} 
           />
           <Credit /> 
      </div>
     
  );
}

export default Board;
