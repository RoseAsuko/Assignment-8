import React from 'react'

//one block at a time so ill put it in a td
class TableCell extends React.Component{
    constructor(props){
        super(props)
    

        }

render(){
return (
    

        <td id = "usersTable" class = 't' style ={{"background":this.props.color}}></td>
)
}

}
export default TableCell;