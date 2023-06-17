import React, { useState } from 'react'

const Listas = () => {
    // useState: es un hook que nos permite manejar el estado de un componente funcional
    const personas = [
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'Pedro' },
        { id: 3, nombre: 'Maria' },
        { id: 4, nombre: 'Jose' },
        { id: 5, nombre: 'Luis' },
        { id: 6, nombre: 'Ana' },
        { id: 7, nombre: 'Luisa' },
    ]

    const [list, setLista] = useState(personas);// id: 1, nombre: 'Juan', id: 2, nombre: 'Pedro', id: 3, nombre: 'Maria', id: 4, nombre: 'Jose', id: 5, nombre: 'Luis', id: 6, nombre: 'Ana', id: 7, nombre: 'Luisa'


    const agregarPersona = () => {
        const nuevaPersona = {
            id: 8,
            nombre: 'Carlos'
        }
        setLista([...list, nuevaPersona]) // ...list: es para que no se sobreescriba la lista operator spread: es para que no se sobreescriba la lista

        alert('Persona agregada')
    }

    //Spread Operator: es para que no se sobreescriba la lista 

    return (
        <>

            <div className="container">
                <h2>Lista de personas</h2>
                {
                    list.map((persona, index) => (
                        <h4 key={index}> {persona.nombre} </h4>
                    ))
                }

                <button className="boton btn btn-danger bi bi-trash3 " onClick={agregarPersona}>Agregar Persona</button>

            </div>



        </>
    )
}

export default Listas
