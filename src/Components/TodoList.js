import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Form from './Form';
import Lists from './Lists';
import Todo from './Todo'
import './Styling/Board.css';
import { v4 as uuidv4 } from "uuid";
import Board from './Board';




function TodoList({ todos, setTodos, setInputText, inputText}) {

  
  

  const handleDragEnd = (result, destination, source) => {
    const start = result.source.droppableId;
    const finish = result.destination.droppableId;
    console.log("Start", start.id);
    console.log("Finish", finish);
     
    // Return card if it is dropped outside a column. 
    if(!result.destination) return;

    // Moves the cards whithin the sam column. 
    if (start === finish) {
      const items = Array.from(todos); 
      const [reorderedItem] = items.splice(result.source.index, 1); 
      items.splice(result.destination.index, 0, reorderedItem);
  
      setTodos(items);
      }




    //TODO - move from one list to another -> first try: 
    if(start !== finish ) {
      const startTaskIds = Array.from(start);

      

    console.log(result.source.droppableId);
    console.log(result.destination.droppableId);

    
    };

    // --""-- 



    
   
console.log(result);
  }

  
  return (

    <div className='todo-container'>
      
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='todo-list-wrapper'>
          <h1 className='created-heading'>TODO:</h1>
          <div className='todo-list'>
            
            <Droppable droppableId='droppable-1' key='Drop'>
              {(provided ) => (
                <div className='todo-list-created' {...provided.droppableProps} ref={provided.innerRef} >
                  
                  {todos.map((todo, index) => (
                    
                    <Todo 
                    text={todo.text}
                    setTodos={setTodos}
                    todo={todo}
                    todos={todos}
                    index={index}
                    key={todo.id}
                    />
                  ))} 
                  {provided.placeholder}
                
                  </div>
                  
              )} 
            </Droppable>
            {/* 
            // FORM in the bottom of of the list
            <div className='form-wrapper'>
              <Form 
              setInputText={setInputText}  
              inputText={inputText} 
              todos={todos} 
              setTodos={setTodos}
              />
            </div> */}
          </div>
            
          </div>
          
      </DragDropContext>
     
    </div> 
  )
}

export default TodoList