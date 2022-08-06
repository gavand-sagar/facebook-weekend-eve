import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home.js'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup/>} />
        <Route path='*' element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>

  </>)

}

export default App;
