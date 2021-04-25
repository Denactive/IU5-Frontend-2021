import React from 'react'

import ListItem from './ListItem'
import AddBut from './AddButton'

export default function MyList(props) {
    const listItems = props.tasks;
    return (
      <div className="list" >
        <h1 className=" text-align-center w-100">Список задач</h1>
        
        {listItems.map((task) =>
            <ListItem task={task} key={task.id}/>
        )}
        <AddBut AddTask={props.AddTask}/>
      </div> 
    );
}
