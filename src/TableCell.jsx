import React from 'react'
import './App.css'

//one block at a time so ill put it in a td
class TableCell extends React.Component{
    constructor(props){
        super(props)
    

        }


colorhander(e)
{
        e.target.style.background = this.props.color;
} 

render(){
return (
             
        <td id = "usersTable" class = 't' onClick={(e)=>this.colorhander(e)}></td>
)
}

}
export default TableCell;