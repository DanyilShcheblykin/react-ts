import React from 'react';
import './pseudo-clases.scss'

const PseudoClases = () => {
    return (
        <>
            <div>
                <p>Would you like to subscribe to our channel?</p>
                <button className="joinBtn">Subscribe</button>
            </div>
            <ul>
                <li>Bill Russell</li>
                <li>Sam Jones</li>
                <li>Tom Heinsohn</li>
            </ul>

            <form>
                <p>Which flavor would you like to order?</p>
                <label>Full Name: <input name="firstName" type="text" /></label>
                <label>Flavor:
                    <select name="flavor">
                        <option>Cherry</option>
                        <option>Green Tea</option>
                        <option>Moose Tracks</option>
                        <option>Mint Chip</option>
                    </select>
                </label>
            </form>

            <div className='mama'>
                <p>Mama</p>
                <p>Mama</p>
                <p>Mama</p>
                <p>Mama</p>
            </div>

            <div className='nth'>
                <p>Papa</p>
                <p>Papa</p>
                <p>Papa</p>
                <p>Papa</p>
            </div>

        </>

    );
};

export default PseudoClases;