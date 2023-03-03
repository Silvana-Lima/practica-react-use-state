import { useState } from "react"


export const Button = () => {

    const [color, setColor] = useState("white");

    const colors = ["red", "green", "blue", "yellow"];
   

    const changeBackground = ()=>{

      setColor(colors[Math.round(Math.random()*(colors.length - 1))])
            
                  
    }

    let body = document.querySelector("body")
    body.style.backgroundColor = color ;

    return <button onClick={changeBackground} className="buttonEjUno" >Cambiar color de fondo</button>


}