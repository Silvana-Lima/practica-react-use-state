import { useState } from "react"

export const SelectionBox = ()=>{

    const [option, setOption] = useState();

    const changeOption = (e)=>{
        setOption(e.target.value)
    }


    return(
        <div>
            <h1>Eligiste la opción: {option} </h1>
            <select name="" id="" onChange={changeOption}>
                <option value="Uno">Opción uno</option>
                <option value="Dos">Opción dos</option>
                <option value="Tres">Opción tres</option>
            </select>
        </div>
    )
}