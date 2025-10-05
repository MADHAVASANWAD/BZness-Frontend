import "../css/Nav.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

    return (

        <div className="nav">
            <p onClick={()=>navigate("/")}> Welcome To BZness Groceries</p>
            <div className="inner">
                <span onClick={() => navigate("/signin")}>Sign In</span>
                <span onClick={() => navigate("/signup")} >Sign Up</span>
            </div>
        </div>

    )
}

export default Navbar;