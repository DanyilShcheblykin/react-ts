import { useState } from "react"

const UseStateAdd = () => {

    const [state, setState] = useState<number>(1)
    const onClick = () => {
        setState((state) => {
            return ++state
        })
        setState(state + 1)// тут не будет срабатывать так как берется текущее значаение
    }
    return (
        <>
            <h1>number :  {state}</h1>
            <button onClick={() => onClick()}>Add</button>
            <button onClick={onClick}>Add</button>

        </>
    )
}

export default UseStateAdd