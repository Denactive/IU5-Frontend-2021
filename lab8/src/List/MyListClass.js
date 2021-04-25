class MyList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: []};
    }
  
    componentDidMount() {
      console.log("list creating...");
      this.items = ['a'];
    }
  
    componentWillUnmount() {
      console.log("list delelting...");
    }
  
    addTask(el) {
      this.setState(() => {
        console.log("adding " + el + ' to items');
        this.items.push(el);
      });
    }
  
    delTask(id) {
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
      const listItems = this.items;
      return (
        <div>
          <h1>Список говна!</h1>
          <ul>
            {listItems.map(number =>
            <li key={number.toString()}>
              {number}
            </li>
            )}
          </ul>
        </div>
      );
    }
  }