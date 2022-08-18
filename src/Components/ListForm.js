import React from 'react'
import './Styling/Board.css'
import { v4 as uuidv4 } from "uuid";

function ListForm( list, setList, submitTodoHandler) {
    
    
    

  

      
      /*const submitListHandler = (e) => {
        // Prevents refreshing the browser when the button is clicked
        e.preventDefault();
        setList([
            ...list,{
                
                id: uuidv4()
            }
        ]);
       
        
    };
    */

  return (
    
        <form className='form'>
            
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>

  )
}

export default ListForm