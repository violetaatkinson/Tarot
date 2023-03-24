import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'
import Calendar from './views/Calendar/Calendar'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="/calendario" element={<Calendar/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
