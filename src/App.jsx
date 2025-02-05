import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Router from './Components/Router/Router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-all'>
    <Navbar/>
       <Router/>
    

    <Footer/>
    </div>
  )
}

export default App
