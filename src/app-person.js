const personaA = {
    nombre: 'Perico',
    edad: 26,
    city: 'Reus'
}

const personaB = {
    nombre: 'Sultana',
    edad: 26,
    city: 'Riba Roja d\'Ebre'
}

console.log(personaA.nombre);

const sumar = (e)=>{
    personaA.edad=personaA.edad+1
    //personaA.edad += 1
    //personaA.edad ++
    render()
}

const restar = (e)=>{
    personaA.edad=personaA.edad-1
    //personaA.edad -= 1
    //personaA.edad --
    render()
}


const reset = (e)=>{
    personaA.edad=0
    render()
}


const render = ()=>{

    const template = (
    <div>
        <h1>{personaA.nombre}</h1>
        <p>{personaA.edad}</p>
        <p>{personaA.city}</p>

        
        <button onClick={sumar}>+1</button>
        <button onClick={restar}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
    )



render()
