import { useState } from "react"

export const ButtonTheme = ()=>{

    const [theme, setTheme] = useState();

    const temas = [
        {
          nombre: 'Tema 1',
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderColor: '#000000'
        },
        {
          nombre: 'Tema 2',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          borderColor: '#FFFFFF'
        },
        {
          nombre: 'Tema 3',
          backgroundColor: '#FF0000',
          color: '#FFFFFF',
          borderColor: '#000000'
        }
      ];

      const changeTheme = ()=>{
        setTheme(temas[Math.round(Math.random()*(temas.length - 1))])
    }

//    const body = document.querySelector("body");
//     body.style.backgroundColor = {temas.backgroundColor}

    
    return(<div>
        <h1>{temas.nombre} </h1>
        <button onClick={changeTheme} >Cambiar tema</button>
    </div>
        
    )
}