import { useState } from 'react'

import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'
import Preview from './components/Preview'

function App() {
  const [formInfo, setFormInfo] = useState({
    title: '',
    description: ''
  })

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

  return (
    <>
      <Header />
      <TodoList />
      <TodoForm formInfo={formInfo} onTitleChange={titleHandler} onDescriptionChange={descriptionHandler} />
      <Preview formInfo={formInfo} />
    </>
  )
}

export default App
