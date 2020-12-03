import React from 'react';
import './App.css';
import TodoList from './Components/TodoList'

function Welcome(props) {
  return <h1>Halo, my name is {props.name}</h1>;
}

function App() {
  return (
    <div className="body">
      <header><Welcome name="Muhammad Iqbal" /></header>
    <main>
    <p> I dont know how myself still alive but, this is my To Do List:</p>
    <TodoList />
    
    </main>
    <footer>This is my Footer</footer> 
    </div>
  );
}


export default App;
