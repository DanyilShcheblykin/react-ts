import React, { DetailedHTMLProps, memo, useRef, useState } from 'react';
import useBooleanState from './useBooleanState';
import useBooleanState2 from './useBooleanState2';

const BooleanState = () => {

    const ref = useRef<HTMLButtonElement>(null)

    // const show = useBooleanState(ref) // show hase new value on every click потому что происходит rerender и перезаписывается значение

    const [state, toggle] = useBooleanState2()

    console.log(state)

    return (
        <div>
            <Button onClick={toggle}>Toogle</Button>
            {state && <h1 style={{ color: "red" }}>Show</h1>}
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