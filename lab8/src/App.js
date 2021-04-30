import React from 'react'
import './App.css'
import Context from './Context'

import MyList from './List/List.js';

function App() {
  const [tasks, setTasks] = React.useState([])
  
  function CrossOut(i) {
    console.log("crossing out " + i);
    setTasks (
      tasks.map(task => {
        if (task.id === i)
          task.done = !task.done;
        return task;
      })
    )
  }

  function delTask(i) {
    setTasks (
      tasks.filter(x => x.id !== i)
    );
  }

  function AddTask(el) {
    setTasks(
      tasks.concat([{
        title: el,
        id: Date.now(),
        done: false
      }]))
  }

  function RenameTask(i, value) {
    console.log("Renaming " + i);
    setTasks (
      tasks.map(task => {
        if (task.id === i)
          task.title = value;
        return task;
      })
    )
  }

  return (
    <Context.Provider value={[CrossOut, RenameTask, delTask]}>
      <div className="bg-img">
          <MyList tasks={tasks} AddTask={AddTask}/>
          <footer>
          Turchin Denis IU5-45
          </footer>
      </div>
    </Context.Provider>
  );
}

export default App;
