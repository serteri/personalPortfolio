import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import {Projects} from './pages/ProjectsPage/Projects'

function App() {
  return (
  <div>
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<Projects />}/>
    <Route path="/about" element={<Outlet />}>
      <Route index element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  </Routes>
</BrowserRouter>
  </div>
  )
  
}

export default App;
