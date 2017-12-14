import React from 'react';
import Radium from 'radium';

class LoadSave extends React.Component{

    state={
        display:false
    }

    showPanel = ()=> {
        const display = this.state.display;
        this.setState({
            display : !display
        })
    }
    render(){
        const style ={
            display :'none'
            }

        if (this.state.display) {
            style.display = 'block'
        }

        return (
            <div className='exportContainer'>
                <span className='exportBtn' onClick={this.showPanel}>export/import</span>
                <form style={style} className='formExport' onSubmit={this.props.onSubmit}>
                    <input type="file" id="fileInput"/>
                    <button type='submit'>Load list</button>
                    <button onClick={this.props.saveList}>Save list</button>
                </form>
            </div>
        )
    }
}
export default Radium(LoadSave);
