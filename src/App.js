import logo from './logo.svg';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './App.css';
import { connect } from './redux.js';


function App() {
  return (
    <div>
      <table>
      <tr><td><button onClick={"ADD ROW"} id = "addRow" type = "button">Add Row</button></td>
      <td><button onClick={"ADD COLUMN"} id = "addColumns" type = "button">Add Columns</button></td>
      
      <select name = "Colors" id ="colors">
        <option>Red</option>
        <option>Gold</option>
        <option>Black</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Orange</option>
        <option>white</option>
      </select>
      </tr> 
      
      <tr><td><button onClick={"SUB ROW"}  id = "subRow" type = "button">Subtract Row</button></td>
      <td><button onClick={"SUB COLUMN"} id = "subColumns" type = "button">Subtract Columns</button></td></tr>
    
     </table> 

     <table id = "usersTable">
    <tr id = "usersTable"><td id = "usersTable" class = "t"> </td><td id = "usersTable" class = "t"> </td></tr>
    <tr id = "usersTable"><td id = "usersTable" class = "t"></td><td id = "usersTable" class = "t"> </td></tr>
    </table>
    <br></br>
   
    <button onClick={"FILL"} id = "fill" type = "button">Fill</button>
    <button onClick={"CLEAR"} id = "clear" type = "button">Clear</button>

    </div>
  );
}

export default App;
