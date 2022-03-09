import logo from './logo.svg';
import './App.css';
import Layout from './componets/Layout';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
         
             <Routes>

                   <Route path='/' element={<Home/>}/>
                   <Route path='/projects' element={<Project/>}/>
                   <Route path='/contact' element={<Contact/>}/>

             </Routes>

         </BrowserRouter>

    </div>
  );
}

export default App;