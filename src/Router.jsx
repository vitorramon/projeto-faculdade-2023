import { Routes, Route } from "react-router-dom"; // ctrl + space: aparece as opções
import RequireAuth from "./components/RequireAuth/index";

import Layout from './components/Layout/index'
import Main from './pages/Main/index';
import About from './pages/About/index';
import Singin from './pages/Signin/index';
import Signup from './pages/Signup/index';
import FormClient from "./pages/FormClient/index";


const Router = () => {
    return (
    <>
        <Routes>
            <Route path="/" element = {<Layout />}>
                <Route index element = {<Main />}/>
                <Route path="about" element = {<RequireAuth element={<About />} />}/>
                <Route path="/formclient" element = {<RequireAuth element={<FormClient />} />}/>
            </Route>

            <Route path="/signin" element = {<Singin />}/>
            <Route path="/signup" element = {<Signup />}/>
            
        </Routes>
    </>
    )
}

export default Router 