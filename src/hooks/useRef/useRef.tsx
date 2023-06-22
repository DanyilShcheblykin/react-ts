import { RefObject, useRef, useEffect, useState } from "react"

const UseRef = () => {

    const ref = useRef<HTMLHeadingElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [inputState, setState] = useState<string>("")
    console.log(ref.current) //return Dom element

    useEffect(() => {
        if (ref.current) {
            ref.current.style.backgroundColor = "red"
            console.log(ref)//retrn object with key current
        }
    })
    const changeInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e)//SyntheticBaseEvent - это любые события в browser
                        //SyntheticBaseEvent - any events in browser
        // console.log(e.target)//Dom elemnt 
        setState(e.target.value)
    }

    return (
        <>
            <h1 ref={ref}>UseRef</h1>
            <input onChange={(e) => changeInputState(e)} ref={inputRef} />
        </>

    )
}

export default UseRef