import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Navbar } from './components/Navbar'

function App() {
  const [category , setcategory] = useState("general");
  const [country , setcountry] = useState("in");
  return (
    <div>
     <Navbar 
     setcategory={setcategory}
     setcountry={setcountry}
     />
     <Dashboard 
     category={category} 
     country={country}/>
    </div>
  )
}

export default App
