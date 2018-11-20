import React from 'react';

function newList() {
  alert('test');
  // var item = document.getElementByTagName('input').value
  // var text = document.createTextNode(item)
  // var newItem = document.createElement("li")
  // newItem.appendChild(text)
  // document.getElementByTagName("ul").appendChild(newItem);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <input type="text" placeholder="Add New todo..." />
        <button type="submit" onClick={newList}>Add Task</button>
        <ul></ul>
      </div>
    );
  }
}

export default App;
