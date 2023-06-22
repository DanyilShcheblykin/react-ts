import React from 'react';
import './transition.scss'

const Transition = () => {

    return (
        <>
            <div className='box show'></div>

            <div className='testAnim'>
                <div className='testAnimInside'></div>
                <h1>Hover me</h1>
            </div>
        </>

    );
};

export default Transition;