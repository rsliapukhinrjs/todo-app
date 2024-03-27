import { useState } from 'react'

import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'
import Preview from './components/Preview'

function App() {
  const data = [
    {
      id: 1,
      title: 'Learn React',
      description: 'First step is to learn React'
    },
    {
      id: 2,
      title: 'Learn Node.js',
      description: 'Some backend skills will be great'
    },
    {
      id: 3,
      title: 'SQL database',
      description: 'Database for storing data'
    },
  ]

  const [formInfo, setFormInfo] = useState({
    title: '',
    description: ''
  })
  const [todoData, setTodoData] = useState(data)

  function titleHandler(e) {
    setFormInfo(prevInfo => {
      return {
        title: e.target.value,
        description: prevInfo.description
      }
    })
  }
  function descriptionHandler(e) {
    setFormInfo(prevInfo => {
      return {
        title: prevInfo.title,
        description: e.target.value
      }
    })
  }

  function formSubmitHandler(e) {
    e.preventDefault()

    const newEntry = {
      title: formInfo.title,
      description: formInfo.description,
      id: todoData.length + 1
    }

    setTodoData(prevData => [...prevData, newEntry])
    setFormInfo({
      title: '',
      description: ''
    })
  }

  return (
    <>
      <Header />
      <TodoList todoData={todoData} />
      <TodoForm formInfo={formInfo} onTitleChange={titleHandler} onDescriptionChange={descriptionHandler} onFormSubmit={formSubmitHandler} />
      <Preview formInfo={formInfo} />
    </>
  )
}

export default App
