import React, { Component } from 'react';
import './App.css';
import Table from './Table/Table';
import Row from './Table/Row';

class App extends Component {
  state = {
    rows: [
      { id: 'live', version: '1.36.3', assignment: []},
      { id: 'beta', version: '1.36.3', assignment: [1524]},  
      { id: 'c1-protected', version: '1.36.0', assignment: [2312314,11123124]},  
      { id: 'georgie-test', version: 'branches/PLAY-1552', assignment: [23151324]},  
    ],
  };

  deleteRowHandler = (rowIndex) => {
    const rows = [...this.state.rows];
    const deletedRow = rows.splice(rowIndex, 1);
    console.log(deletedRow);
    this.setState({rows: rows});
  };

  editRowHandler = (rowIndex) => {
    console.log('clicked on ' + rowIndex);
  };

  /*
  * the hovered row should show the delete link
  */
  setRowHovered = (isHovered, rowIndex) => {
    const eventText = isHovered ? 'is hovered' : 'not hovered'
    console.log(rowIndex + ' ' + eventText);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.rows.map((row, index) => {
            return <Row 
              click={() => this.editRowHandler(index)}
              hover={() => this.setRowHovered(true, index)}
              leave={() => this.setRowHovered(false, index)}
              name={row.id} 
              version={row.version} 
              scope={row.assignment} 
              key={row.id}/>
          })}
        </header>
      </div>
    );
  }
}

export default App;
