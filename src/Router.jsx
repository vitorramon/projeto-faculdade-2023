import { Routes, Route } from "react-router-dom"; // ctrl + space: aparece as opções

import Main from './pages/Main/index';
import About from './pages/About/index';
import Singin from './pages/Signin/index';
import Signup from './pages/Signup/index';

import Header from './components/header/index'

const Router = () => {
    return (
    <>
        {/* <Header></Header> */}
        <Routes>
            <Route path="/" element = {<Main />}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/signin" element = {<Singin />}/>
            <Route path="/signup" element = {<Signup />}/>
        </Routes>
    </>
    )
}

export default Router 