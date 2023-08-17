import { useState } from 'react'

function Form ({setPersona, setError}){
    const [nombre, setNombre] = useState("")
    const [equipo, setEquipo] = useState("")

    const handleNombre = (e) => {        
        setNombre(e.target.value)
    }
    const handleEquipo = (e) => {
        setEquipo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError([])
        if(nombre.length >= 3 && nombre.charAt(0) !=" " && equipo.length >= 6){
            setPersona({nombre,equipo})
            setNombre("")
            setEquipo("")                                 
        } else {
            if (equipo.length < 6 && (nombre.length < 3 || nombre.charAt(0) ==" ")){
                setError(["El nombre debe tener 3 o más caracteres y no puede iniciar con espacios vacíos","El nombre del equipo debe tener 6 o más caracteres (indicar nombre completo)"])                
            } else if (nombre.length < 3 || nombre.charAt(0) ==" "){
                setError(["El nombre debe tener 3 o más caracteres y no puede iniciar con espacios vacíos"])         
            } else {
                setError(["El nombre del equipo debe tener 6 o más caracteres (indicar nombre completo)"])         
            }
            setPersona({nombre:"",equipo:""})                      
        }     
    }
    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={handleNombre}/>   
            <input type="text" placeholder="Ingresa tu equipo" value={equipo} onChange={handleEquipo}/>   
            <button type="submit">Enviar</button>
        </form>
    )
}
export default Form;