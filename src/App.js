import React from 'react';
import ListItem from './components/list';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items :[],

        }
    }

    addItem = (event) =>{
        event.preventDefault();
        const prevItems = [...this.state.items];

        let item = {
            author:this.refs.author.value,
            title:this.refs.title.value,
            length:parseInt(this.refs.length.value,10)  // ogarnij na liczby
        }
        prevItems.push(item);
        console.log(prevItems);
        this.refs.author.value = "";
        this.refs.title.value = "";
        this.refs.length.value = "";
        this.setState({
            items:prevItems
        })
    }
    delItem = (event) =>{
        console.log(event.target.id);
        const items = [...this.state.items];
        items.splice(event.target.id,1);
        this.setState({
            items
        })
    }

  render() {
    return (
      <div className='App'>
        <h1>Make Your own music list</h1>

            <form onSubmit={this.addItem}>
                <label>
                    Author:
                    <input type="text" name="author"  ref='author'/>
                </label>
                <label>
                    Title:
                    <input type="text" name="title"  ref='title'/>
                </label>
                <label>
                    Length:
                    <input type="text" name="length"  ref='length'/>
                </label>
                <button type="submit">Add </button>
            </form>
        <ListItem delItem={this.delItem} listItems={this.state.items}/>
      </div>

    );
  }
}

export default App;
