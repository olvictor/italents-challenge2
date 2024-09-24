import React from 'react'
import styles from './Lista.module.css'

const Lista = ({todos,setTodos}) => {

  const handleDelete = (index) =>{
    setTodos((prevItems) => prevItems.filter((_,i)=> i !== index))

  }

  const handleCheck = (index) =>{
     setTodos((prevItems)=> prevItems.map((item, i)=> i === index ? {...item, feito: !item.feito} : item ))
  }

  return (
    <div className={styles.lista}>
        {todos.length < 1 && <p>Nenhuma tarefa registrada</p>}
        {todos.length > 0 && 
        <ul> 
            {todos.map((todo,index)=>(
                <li key={index}>
                    <div>
                        <input type="checkbox" capture={todo.feito} checked={todo.feito} onChange={()=> handleCheck(index)} id={todo.tarefa+index}/> <label htmlFor={todo.tarefa+index} style={{textDecoration: todo.feito === true ? 'line-through' : 'none' }}>{todo.tarefa} 
                        </label>
                    </div>
                    <span className={styles.x_shape} onClick={()=> handleDelete(index)}>X</span>
                </li>
            ))}
        </ul>}
    </div>
  )
}

export default Lista