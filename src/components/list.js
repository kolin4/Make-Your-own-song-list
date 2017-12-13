import React from 'react';
import Item from './item';
class ListItem extends React.Component {
    render() {
        return (
            <div>
                <h5>lista</h5>
                <Item />
            </div>
        )
    }
}

export default ListItem;
