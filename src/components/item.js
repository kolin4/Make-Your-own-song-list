import React from 'react';


class Item extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.author}</p>
                <p>{this.props.title}</p>
                <p>{this.props.length}</p>
                <button id={this.props.id} onClick={this.props.delItem}>Delete</button>
            </div>
        )
    }
}


export default Item;
