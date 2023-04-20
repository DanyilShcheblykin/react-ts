
import React, { RefObject, useEffect, useRef, useState } from 'react'

export const useVisibleElement = (callBack: (bool: boolean) => void, ref: RefObject<any>) => {

    const timout = useRef<NodeJS.Timeout>()
    const [isVisible, setIsVisible] = useState()

    useEffect(() => {
        const func = () => {
            const height = window.innerHeight
            const { top, bottom } = ref.current.getBoundingClientRect()
            const isVisible = top < height && bottom > 0

            if (timout.current) {
                clearTimeout(timout.current)
            }
            timout.current = setTimeout(() => {
                callBack(isVisible)
            })
        }

        func()
        window.addEventListener('scroll', func)

    }, [])

}

