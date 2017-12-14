import React from 'react';


class Item extends React.Component {
    render(){
        return(
            <tr id={this.props.id}  onClick={this.props.delItem}>
                <td  className='tdSong'>{this.props.author}<sub>{this.props.title}</sub></td>
                <td   className='tdLength'>{this.props.length}</td>
            </tr>

        )
    }
}


export default Item;
