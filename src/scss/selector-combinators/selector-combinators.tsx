import React from 'react';
import '../scss/selector-combinators.scss'

const SelectorCombinators = () => {
    return (
        <div className='main'>
            <p className='block'>Block</p>
            <div>
                <p>Block inside</p>
            </div>
            <p className='block'>Block</p>

            <div>
                <img src="example.png" />
                <p>This paragraph will not be selected</p>
                <p>This paragraph will be selected</p>
                <h1>Hello</h1>
                <p>This paragraph will also be selected</p>
                <div><p>P inside</p></div>
            </div>

            <div >
                <h1 className='mama'>Hello</h1>
                <h1>hhhh</h1>
                <p>Mama</p>
            </div>

        </div>
    );
};

export default SelectorCombinators;