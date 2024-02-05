// import { useDispatch } from "react-redux";
// import { register } from "../../redux/apiCalls";
import "./register.css";
import { useState } from "react";

export default function Register() {
  // const dispatch = useDispatch();
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [passwordAgain , setPasswordAgain] = useState("");
  // const handleClick = ()=>{
  //   if(password !== passwordAgain) {return alert('Passwords do not match');}
  //   else{
  //     register(dispatch , {name , email , password });
  //   }
    
  // }
  console.log("LINE AT 14" , name , password , email);
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">social-media</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on social-media.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" onChange={((e)=>(setName(e.target.value)))} />
            <input placeholder="Email" className="registerInput" onChange={((e)=>(setEmail(e.target.value)))} />
            <input placeholder="Password" type="password" className="registerInput" onChange={((e)=>(setPassword(e.target.value)))} />
            <input placeholder="Confirm Password" className="registerInput" type="password" onChange={((e)=>(setPasswordAgain(e.target.value)))} />
            <input placeholder="Confirm Password" className="registerInput" type="password" onChange={((e)=>(setPasswordAgain(e.target.value)))} />
            {/* <button className="registerButton" onClick={handleClick}>Sign Up</button> */}

          </div>
        </div>
      </div>
    </div>
  );
}