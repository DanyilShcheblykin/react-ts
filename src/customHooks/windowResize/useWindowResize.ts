import { useEffect, useRef } from "react"
const useWindowResize = (callback: (width: number, height: number) => void, debounce?: number) => {

    // let timout: NodeJS.Timeout; //это не оч хороший вариант так как будет происходить re-render на изменении состояния 
    let timout = useRef<NodeJS.Timeout>()// нужно так что бы не было rerender , потому что когда мы меняем current не происходит rerender 
    useEffect(() => {
        const funcResize = () => {

            const { innerWidth, innerHeight } = window
            if (timout.current) {
                clearTimeout(timout.current)
            }
            timout.current = setTimeout(() => {
                callback(innerWidth, innerHeight)
            }, debounce)
        }
        window.addEventListener("resize", funcResize)
        funcResize() //это нужно что бы сразу показывало размер экрана 

        return () => {
            window.removeEventListener("resize", funcResize)
        }
    }, [])
}

export default useWindowResize