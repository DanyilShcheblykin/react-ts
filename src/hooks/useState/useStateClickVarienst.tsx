import { useState } from "react";

function UseStateClickVarinets() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <Child count={count} onClick={()=>handleClick} />{/*  тут не будет работать потому что мы handleClick click передаем  в Child оно теряет context а он должен быть привязан к Parent */}
            <button onClick={() => handleClick()}>Increment from Parent</button> 
        </div>
    );
}

function Child(props: any) {
    return (
        <div>
            <p>Count: {props.count}</p>
            <button onClick={props.onClick}>Increment from Child</button>
        </div>
    );
}

export default UseStateClickVarinets





