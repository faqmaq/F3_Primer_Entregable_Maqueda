function Card({persona}){    

    return(
    <div className="card">
        <p>HOLA {persona.nombre.toUpperCase()}!! VEO QUE SOS HINCHA DEL GLORIOSO {persona.equipo.toUpperCase()}.</p>
        <h3>¡FELICITACIONES!</h3>
        
    </div>)     
}
export default Card;