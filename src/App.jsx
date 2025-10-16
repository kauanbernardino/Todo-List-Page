import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import Todoform from './components/Todoform'


function App() {

  const [todos, setTodos] = useState([

    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    }
  ])
  const addTodo = (text, category) => {

    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
    ];
    setTodos(newTodo);
  }
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    console.log(filteredTodos)
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }
  return (



    <>
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <div className='todo-list'>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} remove={removeTodo} completeTodo={completeTodo} />
          ))}
        </div>
        <Todoform addTodo={addTodo} />
      </div>
    </>
  )
}

export default App
