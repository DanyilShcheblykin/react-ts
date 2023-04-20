import { useContext } from "react"
import { ThemeContext } from "./useContextParent"

const UseContext = () => {

    const data = useContext(ThemeContext)
    return (
        <>
            <h1>Name : {data.name}</h1>
            <h1>SecondName : {data.secondName}</h1>
        </>
    )
}
export default UseContext