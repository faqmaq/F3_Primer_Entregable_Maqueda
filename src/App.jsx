import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() { 
  const [persona, setPersona] = useState({})
  const [error, setError] = useState([])
  const mostrarCard = (persona) => {
    if (persona.nombre){
      return (
        <Card persona={persona} />
      )
    }
  }  

  return (
    <div className='App'>
      <h1>HINCHA DE:</h1>
      {error.map((error,index) => (
        <div key={index}>
            <h4 className="error">{error}</h4>
        </div>
      ))}
      <Form setPersona={setPersona} setError={setError} />     
      {mostrarCard(persona)}  
    </div>
    )
}

export default App
