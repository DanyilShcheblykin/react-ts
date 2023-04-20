import React, { useEffect, useState } from "react"

const UseStateInterval = () => {
    const [state, setState] = useState<number>(1)

    useEffect(() => {

        const interval = setInterval(() => {
            setState(prev => ++prev)
        }, 1000)

        return () => {
            clearInterval // new interval is created and the previous interval is cleared each time the state changes.
        }
    }, [state])

    return (
        <>
            <h1> Number is: {state}</h1>
        </>

    )
}
export default UseStateInterval