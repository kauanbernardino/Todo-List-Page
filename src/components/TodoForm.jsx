import React from 'react'
import { useState } from 'react'


const Todoform = ({ addTodo }) => {
    const [ value, setValue] = useState("")
    const [ category, setCategory] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }
  return (
    <div>
        <h2> Criar tarefa</h2>
        <form className='todo-form' onSubmit={handleSubmit}> 
            <input value= {value} type="text" placeholder='Digite a tarefa' onChange={(e) => setValue(e.target.value) } />
            <select value = {category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
        
        
    </div>
  )
}

export default Todoform