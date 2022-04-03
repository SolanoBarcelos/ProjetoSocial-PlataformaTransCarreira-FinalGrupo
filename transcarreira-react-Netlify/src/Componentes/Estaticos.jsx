import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import Footer from "./Footer"

const Estaticos = () => {
    return (

   <div>

        <Menu/>
        <Outlet/>
        <Footer/>

    </div>

    

    )
    
}

export default Estaticos;