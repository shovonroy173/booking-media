import { Link } from "react-router-dom";
import "./navbar.css";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { loginOut } from "../../redux/apiCalls";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleClick = ()=>{
    loginOut(dispatch);
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">booking-media</span>
        <div className="navItems">
          {user.currentUser ? (
            <>
            <Avatar className="avatar">{user.currentUser.name[0].toUpperCase()}</Avatar>
            <LogoutIcon onClick={handleClick}/>
            </>
          ) : (
            <>
              <Link to="register">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
