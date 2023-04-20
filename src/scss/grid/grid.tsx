import React from 'react';
import './grid.scss'

const Grid = () => {
    return (
        <div className='container'>

            <div className='displayBlock'>
                <div className="gridBlock block1">1</div>
                <div className="gridBlock block2">2</div>
                <div className="gridBlock block3">3</div>
                <div className="gridBlock block4">4</div>
                <div className="gridBlock block5">5</div>
            </div>

            <p className='block'>Block</p>
            
        </div>
    );
};

export default Grid;