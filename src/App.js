import Nav from './comps/Nav.js';
import { Routes, Route } from 'react-router-dom';
import Users from './comps/Users.js';
import Home  from './comps/Home.js';
import {Login}  from './comps/Login.js';
import { useEffect, useState } from 'react';
import './App.css'
import { Foods } from './comps/Foods.js';


function App() {



 
  const[name,setName] =useState('')
  const[id,setId] =useState('')


  useEffect(()=>{
(
  async()=>{


    const response = await fetch('http://localhost:8000/api/user/', {
       headers: {'Content-Type': 'application/json'},
      credentials: 'include',
     
  });
const content = await response.json();
setName(content.name)
setId(content.id)



  }
)(

)
},[])




  return (
    <div className="App">
{/* <Nav name={name}         setName={setName}
/> */}
    <Routes>
      <Route path = '/' element={<Home name={name} id={id} />} />
      <Route path = '/login' element={<Login setName={setName} />} />
      <Route path = '/foods' element={<Foods setName={setName} />} />


      {/* <Route path="/login" element={<Login />} /> */}

    </Routes>

      
    </div>
  );
}

export default App;
