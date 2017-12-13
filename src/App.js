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
    saveList = () =>{
        const items = [...this.state.items];
        let itemsJSON =  JSON.stringify(items);
        function download(text, name, type) {
            let a = document.createElement("a");
            let file = new Blob([text], {type: type});
            a.href = URL.createObjectURL(file);
            a.download = name;
            a.click();
        }
        download(itemsJSON,'lista.txt','text/plain');
    }
    loadList = (event) =>{
        event.preventDefault();
        let files = event.target.children[0].files;
        if (files.length <= 0) {
            return false;
        }
        let fr = new FileReader();
        fr.onload = (e)=> {
             let result = JSON.parse(e.target.result);
             this.setState({
                 items:result
             })
         }
         fr.readAsText(files.item(0));
    }
  render() {
    return (
      <div className='App'>
          <form onSubmit={this.loadList}>
              <input type="file" id="fileInput"/>
              <button type='submit'>Load list</button>
          </form>
          <button onClick={this.saveList}>Save list</button>
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
