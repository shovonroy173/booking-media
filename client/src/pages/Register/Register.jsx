// import { useDispatch } from "react-redux";
// import { register } from "../../redux/apiCalls";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import "./register.css";
import { useState } from "react";

export default function Register() {
  // const dispatch = useDispatch();
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [passwordAgain , setPasswordAgain] = useState("");
  const [client , setClient] = useState("");
  // const handleClick = ()=>{
  //   if(password !== passwordAgain) {return alert('Passwords do not match');}
  //   else{
  //     register(dispatch , {name , email , password });
  //   }
    
  // }
  console.log("LINE AT 14" , name , password , email , client);
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerTop">
          <h3 className="registerLogo">booking-media</h3>
          <PersonIcon/>
          </div>
        </div>
        <div className="registerRight">
          <div className="registerTitle">
            <h1>Register</h1>
            <p>Please fill  in the form to create an account.</p>
          </div>
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" onChange={((e)=>(setName(e.target.value)))} />
            <input placeholder="Email" className="registerInput" onChange={((e)=>(setEmail(e.target.value)))} />
            <input placeholder="Password" type="password" className="registerInput" onChange={((e)=>(setPassword(e.target.value)))} />
            <input placeholder="Confirm Password" className="registerInput" type="password" onChange={((e)=>(setPasswordAgain(e.target.value)))} />
           
            <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={client}
          onChange={((e)=>(setClient(e.target.value)))}
          autoWidth
          label="Mode"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
          
        </Select>
      </FormControl>
    
            {/* <button className="registerButton" onClick={handleClick}>Sign Up</button> */}

          </div>
        </div>
      
    </div>
  );
}