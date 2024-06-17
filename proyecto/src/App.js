import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contactos from './components/Contactos';
import Menu from './components/Menu';
import Navbarprimero from './layouts/Navbarprimero';
import Noticias from './components/Noticias'
import Creditos from './components/Creditos';
import Footer1 from './layouts/Footer1';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Navbarprimero/>}>
            <Route index element={<Home/>}/>
            <Route path='Menu' element={<Menu/>}/>
            <Route path='Contactos' element={<Contactos/>}/>
            <Route path='Noticias' element={<Noticias/>}/>
            <Route path='Creditos' element={<Creditos/>}/>

            <Route path='#' element={<Navigate replace to ='/'/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer1/>
    </div>
    
  );
}

export default App;
