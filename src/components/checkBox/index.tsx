import React from 'react';
import './checkBox.scss'

const CheckBox = () => {
    return (
        <>
            <label>
                <input type="checkbox" className='checkbox' />
                <div className='check'></div>
            </label>

        </>


    );
};

export default CheckBox;