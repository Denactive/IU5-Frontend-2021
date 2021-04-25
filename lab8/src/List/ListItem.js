import React, { useContext } from 'react'
import Context from '../Context'

export default function ListItem({ task, /*Change, /*delTask*/}) {
    const [todoInput, setTodoInput]=React.useState(task.title);
    const [Change, delTask] = useContext(Context)
    const classes = [];
    if (task.done)
        classes.push('done')
    return (
      <div className="list-item">
        <input type="checkbox" className="list-checkbox" checked={task.done} onChange={() => Change(task.id)}/>
        <span className={classes.join(' ')} type="text" value={task.title}>{task.title}</span>
        <button className="list-del-btn" onClick={delTask.bind(null, task.id)}>X</button>
      </div>
    );
  }