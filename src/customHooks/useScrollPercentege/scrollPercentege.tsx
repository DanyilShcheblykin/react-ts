import { useEffect, useRef } from 'react'
import './style.scss'
import useScrollPercentage from './useScrollPercentage'


const ScrollPercent = () => {

    const ref = useRef<HTMLDivElement>(null)
    const refmain = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(refmain.current){
            console.log(refmain.current.scrollHeight)
        }

    })


    useScrollPercentage((numb) => {
    console.log("numb : " + numb)
    })

    return (
        <div ref={refmain} >
            <div className="block"></div>
            <div ref={ref} className="block1"></div>
            <div className="block2"></div>
        </div>
    )
}
export default ScrollPercent