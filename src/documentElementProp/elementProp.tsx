import { useEffect, useRef } from "react"
import './styles.scss'


const DocumnetProp = () => {

    const ref = useRef<HTMLDivElement>(null)
    const refMain = useRef<HTMLDivElement>(null)
    const refPapa = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(refPapa.current){
            console.log(refPapa.current.getBoundingClientRect().top)
            console.log(refPapa.current.getBoundingClientRect().bottom)
        }
        
        if (refMain.current) {
            refMain.current.scrollTop = 10
            console.log("scrollHeight : " + refMain.current?.scrollHeight)//включает в себя scroll padding и margin в child element
            console.log("scrollTop : " + refMain.current?.scrollTop)//на сколько был элемент проscroll
        }

        if (ref.current) {
            console.log("height : " + ref.current?.getBoundingClientRect().height)//getBoundingClientRect() дает нам доступиться до свойств размерности и позиции
            console.log("clientHeight : " + ref.current?.clientHeight)//учитывает только padding
            console.log("clientLeft : " + ref.current?.clientLeft)//показывает размерность border если он есть 
            console.log("offsetHeight : " + ref.current?.offsetHeight)//включает в себя padding и border
            console.log("offsetTop : " + ref.current?.offsetTop)//включает в себя margin , paddin , border
        }
    })

    return (
        <div ref={refMain} className="mainBlock">
            <div className="block" ref={ref}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor aspernatur quasi aperiam facilis accusamus sit. Nesciunt nisi quidem delectus alias non earum, eum commodi, provident incidunt harum ipsa. Id! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis dolorem praesentium reprehenderit sint a unde eius voluptatem veniam iure atque, aperiam corrupti ipsam inventore officia accusantium ea totam et!</div>
            <div ref={refPapa} className="papa">Papa</div>
        </div>
    )


}

export default DocumnetProp