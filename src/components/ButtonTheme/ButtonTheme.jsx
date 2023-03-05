import { useState } from "react"
import { temas } from "./themes"

export const ButtonTheme = ()=>{

    const [tema, setTema] = useState(temas[0]);

    const changeTheme = ()=>{
        setTema(temas[Math.round(Math.random()*(temas.length - 1))])
    }

    const { nombre, ...temaSeleccionado} = tema;
  
    return(<div style={ temaSeleccionado }>
        <h1>Estas usando: {nombre} </h1>
        <button onClick={changeTheme} >Cambiar tema</button>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic, eum reiciendis omnis veritatis numquam officia voluptate laborum cupiditate, voluptas aspernatur quos dolor vero repellendus placeat voluptates necessitatibus repudiandae illum.</p>
    </div>
        
    )
}