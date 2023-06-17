//useState: es un hook que nos permite crear estados dentro de un componente funcional y nos permite modificarlos en el tiempo
//Hook: es una funcion especial que nos permite conectarnos a caracteristicas de react
//Tipos de hooks: useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue, useErrorBoundary
import React,{useState} from 'react'

const Repaso = () => {

    const [contador, setContador] = useState(0)

    console.log('Ejecutando UseState en Repaso ',contador)
    
  return (
    <>
        <h1>Contador: {contador}</h1>

        <button onClick={()=>setContador(contador+10)}>Aumentar</button>
    
    </>
  )
}

export default Repaso