import { createContext } from "react"
import UseContext from "./useContext";

interface Data {
    name: string,
    secondName: string
}
const data = {
    name: "Danyil",
    secondName: "Shcheblykin"
}

export const ThemeContext = createContext<Data>(data);

const UseContextParent = () => {

    return (
        <ThemeContext.Provider value={data}>
            <UseContext></UseContext>
        </ThemeContext.Provider>

    )
}
export default UseContextParent