import React from 'react';
import Item from './item';
class ListItem extends React.Component {
    delItem
    render() {
        const items = this.props.listItems.map( (elem,index)=>{
            return (
                <Item  id= {index} delItem={this.props.delItem} key={index} author={elem.author} title={elem.title} length={elem.length} />
            )
        });

        return (
            <div>
                <h3 className='headerListSongs'>Song list</h3>
                <div className='songDesc'>
                    <span>Author</span>
                    <span>Title</span>
                    <span>length</span>
                </div>
                {items}
            </div>
        )
    }
}

export default ListItem;
