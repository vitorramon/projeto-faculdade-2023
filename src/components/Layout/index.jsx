import { Outlet } from "react-router-dom";
import Header from "../header/index";

const Layout = () => {
    return(<>
        <header> 
            <Header/> 
        </header>
        <main> 
            <Outlet/>
         </main>
    </>)
}

export default Layout