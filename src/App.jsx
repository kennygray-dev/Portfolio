import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './components/Footer';


function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path= '/' element= {<Home />}/>
          <Route path= '/contact' element= {<Contact />}/>
          
          </Routes>
          
      </BrowserRouter>
      
      <Footer />
     
    </div>
  );
}

export default App
