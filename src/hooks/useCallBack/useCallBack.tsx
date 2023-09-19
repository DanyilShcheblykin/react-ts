
import React, { useCallback, useState } from 'react';

function UseCallBack() {
    const [count, setCount] = useState(0);
    const [inputVal, setInputVal] = useState<string>('')

    //тут что бы не было сборки handleClick при change inputVal обернули в useCallBack
    //prevent building handleClick when we change inputVal

    const handleClick = useCallback(() => {
        // setCount(prev=> ++prev) вот так вот будет работаь и без зависимости 
        // like so will work and without dependencies
        setCount(() => {
            return count + 1
        });
    }, []);//если без зависимости будет работать только один раз так , а последующие разы не будет так как значение замкнулось на значени (0) 
    // тут нужно обязательно ставить зависимость что бы всегда было обнавленное состояние 
    //if we use this varient without dep it wont work because value closed on 0

    const setInp = (event:any)=>{
        console.log(event)
        setInputVal(event.target.value)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
            <input onChange={setInp}></input>
        </div>
    );
}
export default UseCallBack




