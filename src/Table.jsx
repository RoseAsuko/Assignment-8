import React from 'react'
import TableRows from './TableRows'
import './App.css'


class Table extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

       let row = [];
       
       for(let i = 0; i < this.props.rows; i++)
       {
           row.push(<TableRows columns ={this.props.columns} color = {this.props.color}/>)
       }
      
    
        return(
            <div>
            <table id = "usersTable">
                {row}
            </table>
            </div>
        )

    }






}
export default Table;