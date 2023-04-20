import { RefObject, useEffect, useState } from "react";

const useBooleanState = (ref: RefObject<any>) => {

    const [state, setState] = useState(false)
    const func = () => {
        setState(prev => !prev)
    }
    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('click', func)
        }
        return () => {
            ref.current.removeEventListener('click', func)
        }
    }, [])
    return state
}

export default useBooleanState