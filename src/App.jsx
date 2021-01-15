import React from 'react'
import Table from './Table'
import './App.css';


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            rows: 1,
            columns: 1,
            color: "White"
        }
        
    }

    
render()
{
    
   { document.getElementById("usersTable").addEventListener('click', function(){console.log("ji")})
    } 

    return(
<div>
<table>
      <tr><td><button onClick={()=>{this.setState({rows: this.state.rows +1})}} id = "addRow" type = "button">Add Row</button></td>
      <td><button onClick={()=>{this.setState({columns: this.state.columns +1})}} id = "addColumns" type = "button">Add Columns</button></td>
      
      <select name = "Colors" id ="colors">
        <option value = "Red">Red</option>
        <option value = "Gold">Gold</option>
        <option value = "Black">Black</option>
        <option value = "Blue">Blue</option>
        <option value = "Green">Green</option>
        <option value = "Orange">Orange</option>
        <option value = "White">white</option>
      </select>
      </tr> 
      
      <tr><td><button onClick={()=>{if(this.state.rows > 1){this.setState({rows: this.state.rows -1})}}}
      id = "subRow" type = "button">Subtract Row</button></td>
      <td><button onClick={() => {if(this.state.columns > 1){this.setState({columns: this.state.columns -1})}}}
      id = "subColumns" type = "button">Subtract Columns</button></td></tr>
    
     </table> 
    

      <Table columns ={this.state.columns} rows = {this.state.rows} color = {this.state.color}/>
      
      
      </div>

    )

}
}
export default App;