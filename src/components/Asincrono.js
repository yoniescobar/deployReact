// Async / Await : es una forma de consumir una API de forma asincrona, es decir, que no se detenga la ejecución del programa mientras se hace la petición a la API
//Async: es una forma de consumir una API de forma asincrona, es decir, que no se detenga la ejecución del programa mientras se hace la petición a la API
//await: espera a que se resuelva la promesa para continuar con la ejecución del programa
import React,{useState,useEffect} from 'react'

const Asincrono = () => {

  const [users, setUsers] = useState([]);

 const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
    <h1>Usuarios</h1>

    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Website</th>
            </tr>
        </thead>

        <tbody>
            {
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>




    </>
  )
}

export default Asincrono
