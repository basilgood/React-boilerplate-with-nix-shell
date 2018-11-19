import React from 'react';

function newList() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <input type="text" id={myInput} placeholder="New list..." />
        <span onClick={newList} className="addBtn">Add</span>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
