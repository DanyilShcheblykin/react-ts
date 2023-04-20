import { useMemo, useState } from "react"

const UseMemo = () => {

    const [state, setState] = useState<number>(0)
    const [stateSplit2, setStateSplit2] = useState<number>(0)

    const splitAtTwo = useMemo(() => {//тут может быть любая логика , а эта фунция вызывается на каждом render , поэтому может испортить быстроту отрисовки комп
        return stateSplit2 % 2 === 0
    }, [stateSplit2])

    return (
        <>
            <button>Add normal</button>
            <h1>Normal : {state}</h1>
            <button>Add split two </button>
            <h1>Number : {splitAtTwo ? "okay" : 'bad'} </h1>
        </>
    )
}

export default UseMemo