import React, { useState } from 'react'
import styles from './form.module.css'

const Form = ({ setTodos }) => {
  

  const [todo,setTodo] = useState("");
  const [estadoTodo, setEstadoTodo] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault()
    if(estadoTodo != -1 && todo != ""){
        const objTodo = {
            tarefa: todo,
            feito: Boolean(+estadoTodo)
        }
        setTodos(todos => [...todos, objTodo])
    }
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}> 
        <div className={styles.boxInputs}>
            <label htmlFor="tarefa">Digite o nome da tarefa: </label>
            <input type="text"  id='tarefa' onChange={({target})=> setTodo(target.value)}/>
        </div>
        <div className={styles.boxInputs}>
            <label>Selecione o estado da tarefa:</label>
            <select defaultValue={-1} onChange={({target})=> setEstadoTodo(target.value)}>
                <option value="-1">Selecione...</option>
                <option value="1">Concluido</option>
                <option value="0">Não Concluido</option>
            </select>
        </div>
        <button type='submit'>CADASTRAR</button>
    </form>
  )
}

export default Form