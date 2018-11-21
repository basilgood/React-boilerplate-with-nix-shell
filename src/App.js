import React from 'react';

function newTodo() {
  var item = document.getElementById('todoInput').value;
  var text = document.createTextNode(item);
  var newItem = document.createElement('li');
  newItem.appendChild(text);
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'name';
  checkbox.value = 'value';
  checkbox.id = 'id';
  newItem.appendChild(checkbox);
  document.getElementById('todoList').appendChild(newItem);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <input id="todoInput" type="text" placeholder="Add New todo..." />
        <button type="submit" onClick={newTodo}>Add Task</button>
        <ul id="todoList"></ul>
      </div>
    );
  }
}

export default App;
