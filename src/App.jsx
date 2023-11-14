import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import Projects from './views/Projects';

function App() {
  

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
      

      </Routes>
    </div>
  </Router>
  )
}

export default App
