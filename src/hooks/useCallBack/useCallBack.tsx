
import React, { useCallback, useState } from 'react';

function UseCallBack() {
    const [count, setCount] = useState(0);
    const [inputVal, setInputVal] = useState<string>('')

    // тут что бы не было сборки handleClick при change inputVal обернули в useCallBack

    const handleClick = useCallback(() => {
        // setCount(prev=> ++prev) вот так вот будет работаьь и без зависимости 
        setCount(() => {
            console.log(count)
            return count + 1
        });
    }, [count]);//если без зависимости будет работать только один раз так , а последующие разы не будет так как значение замкнулось на значени (0) 
    // тут нужно обязательно ставить зависимость что бы всегда было обнавленное состояние 
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
            <input onChange={(e) => setInputVal(e.target.value)}></input>
        </div>
    );
}
export default UseCallBack




