import React from 'react'
import './App.css';

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    console.log("list creating...")
  }

  componentWillUnmount() {
    console.log("list delelting...")
  }

  addTask(el) {
    this.setState(() => {
      console.log("adding " + el + ' to items');
      this.items.push(el);
    });
  }

  delTask(id) {
    //   setTasks (
    //     tasks = tasks.slice(0, i).concat(tasks.slice(i + 1, tasks.length))
    //   )
    this.setState(() => {
      let el = this.items.find(item => item.id === id) 
      console.log("deliting " + el.title + ' to items');
      this.items = this.items.filter(item => item.id !== id);
    })
  }

  change(id) {
    this.setState(() => {
      let el = this.items.find(item => item.id === id)
      console.log("changing " + el.title + ' to items');
      el.done = !el.done;
    })
  }
  
  render() {
    const listItems = 
    );
    return (
      <div>
        <h1>Список говна!</h1>
        <ul>
          numbers.map((number) =>
          <li key={number.toString()}>
            {number}
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  list: {
    // display: "flex",
    // flexDiraction: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: '.5rem 1rem',
    border: '3px solid #ccc',
    borderRadius: '5px',
    margingBottom: '.5rem'
  },
  li: {
    display: "flex",
    justifyConten: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margingBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function ListItem({ task/*, Change, delTask*/}) {
  const [todoInput, setTodoInput]=React.useState(task.title);
  return (
    <form style={styles.li}>
      {/* <input type="checkbox" onChange={() => Change(task)}/> */}
      <input type="checkbox"/>
      <input style={styles.input} type="text" value={task.title}/>
      <button>X</button>
    </form>
  );
}

function List({tasks},/* {Change}, */{addTask}/*, {delTask}*/) {
  return (
    <div style={styles.list}>
      {tasks.map(
        (el) => <ListItem task={el} key = {el.id}/>
      )}
      <AddBut addTask={addTask}/>
    </div>
  )
}

function AddBut({addTask}){
  // const [note, setNote] = React.useState('');
  // function onSubmit(event){
  //     event.preventDefault();
  //     if (note.trim()){
  //         addTask(note);
  //         setNote('');
  //     }
  // }
  // return (
  //     <form onSubmit={onSubmit}>
  //         <input value={note} onChange={event=>setNote(event.target.value)}/>
  //     </form>
  // )
  return (
    <button type="submit">Add Task</button>
  );
}

function App() {
  //const [tasks, setTasks]=React.useState([
  const tasks = [
    { id: 0, done: false, title: "Купить хлеб" },
    { id: 1, done: false, title: "Купить масло" },
    { id: 2, done: false, title: "Купить молоко " }
  ]
  
  // function Change(i) {
  //   setTasks(
  //     tasks[i].done = !tasks[i].done,
  //   )
  // }

  // function delTask(i){
  //   setTasks (
  //     tasks = tasks.slice(0, i).concat(tasks.slice(i + 1, tasks.length))
  //   )
  // }

  // function addTask(el){
  //   // setTasks(
  //     tasks.push({done: false, title: el})
  //   // )
  // }

  return (
    <div className="App">
      <Clock/>
      <header className="App-header">
        <h1>Список дел</h1>
        {/* <List tasks={tasks} change={Change} addTask={addTask} delTask={delTask}/> */}
        <List tasks={tasks} addTask={addTask}/>
      </header>
    </div>
  );
}

export default App;
