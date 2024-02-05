import "./App.css";
import Home from './pages/Home/Home';
import   { BrowserRouter as  Router, Route, Routes }  from 'react-router-dom'
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
