import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className = "NavBar">
           <div className="NavBarRect">
               <div className="NavbarFrame">
                <Link className="homelink" to={`/`}>
                   <h2 className = "navhome">Home</h2>
                </Link>
                   <h2 className = "navabout">About</h2>
                   <h2 className = "navcart" >Cart</h2>

               </div>


           </div>


        </nav>


    )




}