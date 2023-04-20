import React, { useCallback, useEffect, useRef, useState } from "react"

const UseEffect = () => {

    const [state, setState] = useState<number>(5)
    const [state2, setState2] = useState<number>(4)
    const [res, setRes] = useState<number>(0)

    const [inputVal, setInputVal] = useState<string>('')

    const sum = useCallback(() => {
        return state + state2
    }, [state, state2])//если использовать без зависимостей тогда useEffect , будет срабатывать на кажом изменении input так как функция будет пересобираться каждый раз 
    //если использовать useCallback useEffect будет срабатывать только когда sum , будет вызвана 

    useEffect(() => {
        console.log("hello")
        setRes(sum())
    }, [sum])

    return (
        <>
            <h1>UseEffect</h1>
            <input onChange={(e) => setInputVal(e.target.value)}></input>
        </>

    )
}
export default UseEffect