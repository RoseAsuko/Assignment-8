import React from 'react'
import TableCell from './TableCell'

class TableRow extends React.Component{
    constructor(props){
        super(props)

    }



    render()
    {
        let column = [];
        
        //if i want a row I need to get the amount of columns 
        for(let i = 0; i < this.props.columns; i++)
        {
            column.push(<TableCell color = {this.props.color}/>);
        }

        return(
            <tr id = "usersTable">{column}</tr>
        )
    }
}
export default TableRow;