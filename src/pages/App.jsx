import QuesInput from '../components/QuesInput'
import { Button } from '../components/Button'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QuesInput />
      <QuesInput />
      <QuesInput />
      <QuesInput />
      <QuesInput />
      <Button label={'Generate'} /> 
    </div>
  )
}

export default App
