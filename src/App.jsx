import './App.css';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import "./css/Signin.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


