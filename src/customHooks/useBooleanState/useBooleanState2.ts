import { useCallback, useState } from "react"

const useBooleanState2 = () => {

    const [state, setState] = useState(false)

    const toggle = useCallback(() => {
        setState(prev => !prev)
    }, [])  //дабы избежать recreate
    
    return [state, toggle] as const
}

export default useBooleanState2

