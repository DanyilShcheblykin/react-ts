import React, { useCallback, useEffect, useRef, useState } from "react"

const UseEffect = () => {

    const [state, setState] = useState<number>(5)
    const [state2, setState2] = useState<number>(4)
    const [res, setRes] = useState<number>(0)

    const [inputVal, setInputVal] = useState<string>('')

    const sum = useCallback(() => {
        return state + state2
    }, [state , state])

    useEffect(() => {
        console.log("hello")
        setRes(sum())
    }, [sum]) //will execute when sum change

    return (
        <>
            <h1>UseEffect</h1>
            <input onChange={(e) => setInputVal(e.target.value)}></input>
        </>

    )
}
export default UseEffect