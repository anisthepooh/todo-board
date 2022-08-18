import React from 'react'
import TodoList from './TodoList';
import './Styling/List.css'; 
import './Styling/Board.css';
import { v4 as uuidv4 } from "uuid";



function Lists(column, setColumn, list) {
  
  
  console.log("column", column)
  console.log("column type", typeof column)
  console.log("Id:", column.list.id)

  const array = ["1", "2"];
  console.log(typeof array); 



  const deleteColumn = () => {
    /*const arr = Object.keys(column)
    console.log(el)
    setColumn(arr.filter(() => "f136a6aa-b2d3-4a77-ad57-d9d05537f1a7" === column.list.id ));
*/
setColumn([
  ...column,{
      text: "Hey",
      id:  uuidv4(),
      key: uuidv4()
  }
]);
console.log("new col:", column)
  };

  return (

    
    <div className='card-wrapper' >
      <div className='card-header-wrapper'>
        
        
        <div className='button-wrapper'>
          <button className='edit-button' >
            <span className='material-symbols-sharp' >check</span>
          </button>
          <button className='trash-btn' onClick={deleteColumn}>
          <i className='fas fa-trash'></i>
          </button>
        </div>
      </div>
        <div className='list'>
        </div>    
    </div>

  )
}

export default Lists