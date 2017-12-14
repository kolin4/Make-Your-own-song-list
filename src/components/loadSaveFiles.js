import React from 'react';


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
            // backgroundColor:'red',
            display: 'flex',
            width: '100%',
            height :'10%',
            alignItems:'center',
            justifyContent: 'space-between',
            form:{
                display :'none'
            },
            span:{
                padding :'3px 6px',
                border: '1px solid black',
                borderRadius:'20px'
            }
        }
        if (this.state.display) {
            style.form.display = 'block'
        }

        return (
            <div style={style}>
                <span style={style.span} onClick={this.showPanel}>Show</span>
                <form style={style.form} onSubmit={this.props.onSubmit}>
                    <input type="file" id="fileInput"/>
                    <button type='submit'>Load list</button>
                    <button onClick={this.props.saveList}>Save list</button>
                </form>
            </div>
        )
    }
}
export default LoadSave;
