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
        const style = {
            width:'100%',
            maxWidth:'100%',
            borderBottom:'1px solid black',
            thead :{

                backgroundColor:'rgba(3,3,3,0.25)'
            }
        }
        return (
            <div>
                <h3 className='headerListSongs'>Song list</h3>
                <div className='songDesc'>
                    <table  style={style}>
                        <thead >
                            <tr style={style.thead}>
                                <td className='tdSong'>Song</td>
                                <td className='tdLength'>Length</td>
                            </tr>
                        </thead>
                        <tbody>
                            {items}

                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListItem;
