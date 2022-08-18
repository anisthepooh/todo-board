import React from 'react'
import initialData from './initial-data'

function TestBoard() {
    const state = initialData; 
  return (
    <div>
        {this.state.columnOrder.map((columnId) => {
        const column = this.state.colmns[columnId]; 
        const tasks = column.taskIds.map(taksId => this.stte.tasks[taksId]);
        return column.title; 
        })
    }
        
    </div>
  )
}

export default TestBoard