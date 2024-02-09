import "./App.css";
import Home from './pages/Home/Home';
import   { BrowserRouter as  Router, Route, Routes, Navigate }  from 'react-router-dom'
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state)=>(state.user));
  console.log("LINE AT 11" , user);
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={user.currentUser ?<Home/> : <Navigate to ="/login"/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/hotel" element={ <Hotel/>} />
        <Route path="/register" element={!user.currentUser ? <Register/> : <Navigate to="/"/>} />
        <Route path="/login" element={!user.currentUser ? <Login/> : <Navigate to="/"/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
