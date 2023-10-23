import logo from './logo.svg';
import './App.css';
import Notfound from './pages/404';
import Home from './home';
import Read from './pages/Read'
import About from './pages/About';
import Mynav from './Component/Mynav';
import Myfooter from './Component/Myfooter';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NotFound from './pages/404';

function App() {
  return (
    <>
    <Mynav/>
    <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path='/read' element={<Read />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Notfound/>}/>
    </Routes>
    <Myfooter/>
    </>
  );
}

export default App;