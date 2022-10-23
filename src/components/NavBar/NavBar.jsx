import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./navBar.css";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonLogin from "../Account/ButtonLogin";
import Account from "../Account/Account";
import { SlHome , SlBookOpen } from "react-icons/sl"
import { AiOutlineShoppingCart , AiOutlineMessage } from "react-icons/ai"
import LOGO from "../../assets/Logo.svg";

export default function NavBar() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth0();
  const buttonSize = 32;
    return (<>
    <div className="nav__container">
      <nav className="nav">
        <button className="nav__button" onClick={()=>navigate("/")} ><SlHome size={buttonSize} /></button>
        <button className="nav__button" onClick={()=>navigate("/catalog")} ><SlBookOpen size={buttonSize} /></button>
        <div className="nav__middleSpace"/>
        <button className="nav__button" onClick={()=>navigate("/")} ><AiOutlineShoppingCart size={buttonSize} /></button>
        <button className="nav__button" onClick={()=>navigate("/")} ><AiOutlineMessage size={buttonSize} /></button>
      </nav>
    </div>
    <div className="nav__container">      
        {isAuthenticated ? <Account /> : <ButtonLogin />}
    </div>
    </>
  );
}
