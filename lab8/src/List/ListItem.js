import React, { useContext } from 'react'
import Context from '../Context'

export default function ListItem({task}) {
    const [todoInput, setTodoInput]=React.useState(task.title);
    const [Change, Rename, delTask] = useContext(Context)
    const classes = ["list-item-field"];
    if (task.done)
      classes.push('done')
    else
      classes.push('active')
    return (
      <div className="list-item">
        <input type="checkbox" className="list-checkbox" checked={task.done} onChange={() => Change(task.id)}/>
        <input className={classes.join(' ')} type="text" value={task.title} onChange={(event) =>
          Rename(task.id, event.target.value)
        }/>
        <button className="list-del-btn" onClick={delTask.bind(null, task.id)}>X</button>
      </div>
    );
  }