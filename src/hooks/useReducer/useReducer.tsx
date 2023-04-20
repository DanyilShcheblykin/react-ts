import React, { useReducer } from "react";

interface State {
    amount: number
}

const initialState = {
    amount: 0
};

const reducerFunc = (state: State, action: { type: string }) => {
    switch (action.type) {
        case "add":
            return {amount: state.amount + 1 };
        case "minus":
            return { amount: state.amount - 1 };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    const add = () => {
        dispatch({ type: "add" });
    };

    const minus = () => {
        dispatch({ type: "minus" });
    };

    return (
        <>
            <button onClick={add}>Add</button>
            <button onClick={minus}>Minus</button>
            <h1>State : {state.amount}</h1>
        </>
    );
};

export default UseReducer;