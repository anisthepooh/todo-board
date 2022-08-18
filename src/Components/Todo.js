import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import './Styling/Card.css'; 

function Todo({text, todo, todos, setTodos, index}) {

    console.log("todos", todos); 


    
    const deleteHandler = () => {

        if (todos ) {
        setTodos(todos.filter((el) => el.id !== todo.id ))
    };
}

 


        
    
  return (
   
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) =>(
        <div {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}>
            <div className='card' >
                <div className='left-content'>
                    <p className='task-description'>{text}</p>
                    {/* <p>Deadline</p>
                    <p>Created</p>
                    <p>Assigned to</p>   */}
                </div>
                <div className='right-content'>
                   {/*  <div>
                        <p>Status:</p>
                        <i></i>
                    </div> */}
                    <button className='trash-btn' onClick={deleteHandler}>
                        <i className='fas fa-trash'></i>
                    </button>
                   
                </div>
            </div>
        </div>
        )} 
    </Draggable>
                

  )
}

export default Todo