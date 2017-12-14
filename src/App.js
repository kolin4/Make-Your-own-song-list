import React from 'react';
import ListItem from './components/list';
import LoadSave from './components/loadSaveFiles';
import fileDownload from 'react-file-download';
import './App.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items :[],
            totalLength:'00:00'
        }
    }

    refreshTime = ()=>{
        if (this.state.length <= 0){return}
        const items = [...this.state.items];
        let minutes = 0;
        let seconds = 0;


        for (let i = 0; i < items.length; i++){
            for (let key in items[i]){
                if ( key === "length"){
                    minutes += Number(items[i][key].slice(0,2));
                    seconds += Number(items[i][key].slice(3,5));
                }
            }

        }
        function countTime(minutes,seconds) {
            let minFromSec = Math.floor(seconds/60);
            let minFinal = Number(minutes) + Number(minFromSec);
            let secFinal = seconds % 60;

            if (minFinal <= 9){
                minFinal = `0${minFinal}`
            }
            if (secFinal <= 9){
                secFinal = `0${secFinal}`
            }

            return `${minFinal}:${secFinal}`
        }
        let result = countTime(minutes,seconds);
        if (result === "0:0"){
            result = '00:00';
        }

        this.setState({
            totalLength:result
        })
    }
    addItem = (event) =>{
        event.preventDefault();
        const prevItems = [...this.state.items];
        let item = {
            author: this.refs.author.value.length > 0 ? this.refs.author.value : 'UNKNOWN',
            title:this.refs.title.value.length > 0 ? this.refs.title.value : 'UNKNOWN',
            length:this.refs.length.value
        }
        prevItems.push(item);
        this.refs.author.value = "";
        this.refs.title.value = "";
        this.refs.length.value = '00:00';
        this.setState({
            items:prevItems,

        }, ()=>{
            this.refreshTime();

        })
        // oblicz dlugosc piosenek
    }
    delItem = (event) =>{

        const items = [...this.state.items];
        items.splice(event.target.id,1);
        this.setState({
            items
        }, ()=>{
            this.refreshTime();
        })
    }
    saveList = () =>{

        const items = [...this.state.items];

        let itemsJSON =  JSON.stringify(items);

        fileDownload(itemsJSON, 'songList.csv');

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
             }, ()=>{
                 this.refreshTime();
             })
         }
         fr.readAsText(files.item(0));

    }

  render() {
    return (
      <div className='App'>
          <LoadSave saveList={this.saveList} onSubmit={this.loadList}/>
          <span>{this.state.totalLength}</span>
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
                    <input type="time" name="length" defaultValue='00:00' ref='length'/>
                </label>
                <button type="submit">Add </button>
            </form>
        <ListItem delItem={this.delItem} listItems={this.state.items}/>
      </div>

    );
  }
}

export default App;
