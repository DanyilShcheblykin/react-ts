import { useState } from "react"

interface Object {
    name: string
    secondName?: string
}

const UseStateObject = () => {

    const [state, setState] = useState<Object>({
        name: "Tamila",
    })
    const onClick = () => {
        setState((prev: any) => {
            return {
                ...prev,
                secondName: 'shche'
            }
        })

    }
    const addLetterToName = () => {
        setState((prev: Object) => {
            return {
                ...prev, //тут это не обяз делать , так как меняется только одно поле , но это хорошая практика , что бы не потерять отсальные данные если они есть 
                name: prev.name + '1'
            }
        })
    }
    return (
        <>
            <h1>name :  {state.name}</h1>
            <h2>seconsName : {state.secondName ? '' : state.secondName}</h2>
            <button onClick={() => onClick()}>Add seond name</button>
            <button onClick={() => addLetterToName()}>Add letter to name</button>
        </>
    )
}

export default UseStateObject