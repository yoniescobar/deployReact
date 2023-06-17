//useEffect: es un hook que nos permite ejecutar codigo cuando se monta, desmonta o actualiza un componente

import React, { useState, useEffect } from 'react';


const Repaso2 = () => {

    const [users, setUsers] = useState([]);

    console.log('Ejecutando UseEffect en Repaso2... ', users)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')  //fetch es una funcion que nos permite hacer peticiones http a un servidor externo
            .then(response => response.json()) //response es la respuesta que nos da el servidor, y response.json() es una funcion que nos permite convertir la respuesta en un objeto json
            .then(users => setUsers(users)) //users es el objeto json que nos devuelve la funcion anterior, y setUsers es una funcion que nos permite modificar el estado de users
    }, []);


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

            <br />
            <br />

            <h1>Usuarios Utilizando bootstrap</h1>


            <table className="container table table-dark table-striped table-hover ">
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

export default Repaso2