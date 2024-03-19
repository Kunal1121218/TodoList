import './App.css';
import Todos from './MyComponents/Todos';
import React, {useEffect, useState} from 'react';
import Header from "./MyComponents/Header";
import AddTodo from './MyComponents/AddTodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete =(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addTodo = (title, desc) =>{
    const myTodo= {
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos]);

  return (
    <div className="App">
      <Header/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
    </div>
  );
}

export default App;
