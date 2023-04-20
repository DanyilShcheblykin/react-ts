import { useRef } from 'react'
import './style.scss'
import { useVisibleElement } from './useVisibleElement'

const Visible = () => {

    const ref = useRef<HTMLDivElement>(null)

    useVisibleElement((isVisible) => {
        console.log(isVisible)
    }, ref)

    return (
        <div>
            <div className="block"></div>
            <div ref={ref} className="block1"></div>
            <div className="block2"></div>
        </div>
    )
}
export default Visible