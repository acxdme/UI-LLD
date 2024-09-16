import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'

const sampleData = [
  {id: 1, title : "comp1" , description : "description 1 data"},
  {id: 2, title : "comp2" , description : "description 2 data"},
  {id: 3, title : "comp3" , description : "description 3 data"}
]

function App() {
  

  return (
    <>
     <Accordion  data = {sampleData} />
    </>
  )
}

export default App
