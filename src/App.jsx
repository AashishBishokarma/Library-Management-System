
import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navbar />}/>
    //     <Route path="/home" element={<Home/>}/>
    //   </Routes>
    // </Router>
    
  )
}

export default App ;
