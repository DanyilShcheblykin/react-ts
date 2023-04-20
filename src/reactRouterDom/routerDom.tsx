import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Mama from './pages/mama';
import Papa from './pages/papa';


const RouterDom = () => {

    return (
        <>
            <Link to='mama'>Mama</Link>
            <Link to='papa'>Papa</Link>
            <Routes>
                <Route path='mama' element={<Mama></Mama>}></Route>
                <Route path='papa' element={<Papa></Papa>}></Route>
            </Routes>
        </>

    )
}

export default RouterDom