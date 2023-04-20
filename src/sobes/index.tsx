import React, { useCallback, useMemo, useRef, useState } from 'react';

const Sobes = () => {

    const [state, setState] = useState<boolean>(true)
    const ref = useRef(false)

    const force = useCallback(() => {
        console.log('hello')
        ref.current = !ref.current
        setState(ref.current)
    }, [])

    useMemo(() => () => {
        console.log("hello")
    }, [state])

    return (
        <div>
            Sobes
            <button onClick={() => force()}>click</button>
        </div>
    );
};

export default Sobes;