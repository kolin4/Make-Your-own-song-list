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
        let item = {
            author:this.refs.author.value,
            title:this.refs.title.value,
            length:this.refs.length.value
        }

        console.log(item);
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
        <ListItem/>
      </div>

    );
  }
}

export default App;
