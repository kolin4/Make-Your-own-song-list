import React from 'react';


class LoadSave extends React.Component{
    render(){
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input type="file" id="fileInput"/>
                    <button type='submit'>Load list</button>
                </form>
                <button onClick={this.props.saveList}>Save list</button>
            </div>
        )
    }
}
export default LoadSave;
