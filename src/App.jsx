import { useState } from 'react'
import './App.css'
import Form from './components/form/form'
import Lista from './components/Lista/Lista';

function App() {
  const [todos, setTodos] = useState([]);
   return (
    <main>
      <Form setTodos={setTodos}/>
      <Lista todos={todos} setTodos={setTodos} />
    </main>
  )
}

export default App
