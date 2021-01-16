import React from 'react'
import Table from './Table'
import './App.css';


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            rows: 2,
            columns: 2,
            color: "White"
        }

    }

    newcolor()
    {
        let newColour = document.getElementById("colors")
        console.log(newColour.value)
       this.setState({color: newColour.value});
    }


render()
{


    return(
<div>
<table>
      <tr><td><button onClick={()=>{this.setState({rows: this.state.rows +1})}} id = "addRow" type = "button">Add Row</button></td>
      <td><button onClick={()=>{this.setState({columns: this.state.columns +1})}} id = "addColumns" type = "button">Add Columns</button></td>


      <select name = "colors" id ="colors" onChange = {()=>this.newcolor()}>
        <option value = "White">white</option>
        <option value = "Red">Red</option>
        <option value = "Gold">Gold</option>
        <option value = "Black">Black</option>
        <option value = "Blue">Blue</option>
        <option value = "Green">Green</option>
        <option value = "Orange">Orange</option>
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