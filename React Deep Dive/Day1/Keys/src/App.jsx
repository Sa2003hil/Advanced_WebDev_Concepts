import { useState } from 'react'
import './App.css'

let counter = 2;

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'go to the gym',
      description: 'roz gym jao'
    },
    {
      id: 2,
      title: 'go to the school',
      description: 'roz school jao'
    }

  ])

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: 'go to the market',
      description: 'roz market jao'
    }])
  }


  return (
    <div>
      <button onClick={addTodo}>Add</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} ></Todo>)}

    </div>
  )
}

function Todo({ title, description }) {
  return (
    <>
      <h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
    </>
  )
}

export default App
