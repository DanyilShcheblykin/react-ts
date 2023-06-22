import React, { DetailedHTMLProps, memo, useRef, useState } from 'react';
import useBooleanState from './useBooleanState';
import useBooleanState2 from './useBooleanState2';

const BooleanState = () => {

    const ref = useRef<HTMLButtonElement>(null)

    // const show = useBooleanState(ref) // show hase new value on every click потому что происходит rerender и перезаписывается значение

    const [state, toggle] = useBooleanState2()

    const [counter, setCounter] = useState<number>(0)

    // if we change counter Button component wont rerender because we wraped it in memo and the prop function we wraped in callBack , if to delete useCallBack or memo will be rerender

    return (
        <div>
            <Button onClick={toggle}>Toogle</Button>
            {state && <h1 style={{ color: "red" }}>Show</h1>}
            <div>Number : {counter}</div>
            <button onClick={() => setCounter(prev => ++prev)}>Add counetr</button>
        </div>
    );
};

export default BooleanState;

const Button = memo((props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    console.log('rerender')
    return (
        <button {...props}></button>
    )
}) //memo что бы не было rerender если props не меняются 

