import { useEffect } from "react"


const useScrollPercentage = (callback: (percent: number) => void) => {

    useEffect(() => {
        const func = () => {
            const documnetScrollheight = document.documentElement.scrollHeight
    
            const scrollTop = document.documentElement.scrollTop + document.documentElement.clientHeight
            const percentScrolling = (scrollTop * 100) / documnetScrollheight
            callback(percentScrolling)
        }
        window.addEventListener("scroll", func)
        return () => {
            window.removeEventListener('scroll', func)
        }
    }, [])

}

export default useScrollPercentage