import { useState } from 'react'
import Course from './components/Course';
import './App.css'
import DsaContext from '../context/DsaContext';
import WebContext from '../context/WebContext';

function App() {
  const [dsaCourse, setDsaCourse] = useState({
    name: 'DSA',
    price: 1000,
    duration: '3 months'
  }); 

  const [webDevCourse, setWebDevCourse] = useState({
    name: 'Web Dev',
    price: 2000,
    duration: '4 months'
  });

  return (
    <>
    <WebContext.Provider value={{webDevCourse, setWebDevCourse}}>
    <DsaContext.Provider value={{dsaCourse, setDsaCourse}}>
      <Course/>
    </DsaContext.Provider>
    </WebContext.Provider>
    </>
  )
}

export default App
