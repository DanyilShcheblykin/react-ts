import React, { useEffect, useRef, useState } from 'react';

interface WindowEvent {
    event: string
    handler: (event: Event) => void
    options?: object
}

const WindowEvent = ({ event, handler, options }: WindowEvent) => {

    const ref = useRef(handler)

    useEffect(() => {
        const fn = (args:Event)=> ref.current(args)
        console.log("useEffect")
        window.addEventListener(event, handler, options)

        return () => {
            window.removeEventListener(event, fn, options)
        }

    }, [event, ref, options])
    return null
};


const Window = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <button onClick={() => setIsVisible(v => !v)}>Toogle</button>
            <WindowEvent event="click" handler={() => console.log("click me")}></WindowEvent>
            {
                isVisible && (
                    <div>
                        <h1>Show</h1>
                    </div>
                )
            }
        </>
    )
}

export default Window