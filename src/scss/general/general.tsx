import React, { useEffect, useRef } from 'react';
import './general.scss'

const GeneralStyles = () => {
    const ref = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
        if(ref.current){
            console.log(ref.current.clientWidth)

        }
      })
    return (
        <>
            <div className='box' ref={ref} >
                General
            </div>
            <div className='inline-block'>inline-block</div>
            <div className='inline-block'>inline-block</div>
            <div className='inline-block'>inline-block</div>
            <div className='flexBlock'>
                <div>hhh</div>
                <div>hhh</div>
                <div>hhh</div>
            </div>
            <div className='mama'></div>
            <div className='papa'></div>

        </>

    );
};

export default GeneralStyles;