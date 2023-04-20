import React from 'react';
import './styles.scss'

const Header = () => {
    return (
        <header className='container'>
            <div className='name'><h1>MySite</h1></div>
            <div className='burger'></div>
        </header>
    );
};

export default Header;