import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './componen/Navbar'
import Add from './view/Add'
import Edit from './view/Edit'
import Home from './view/Home'


function App () {
 
// hook nav bar start
 const[findNav , setFindNav]=useState<string>('')
 console.log( 'im finfnav' ,findNav);
//


return(
<div className=" ">
  <Navbar setFindNav={setFindNav} />
  <div className='mt-10 m-24'  >
    

  <Routes>

    <Route path='/' element={<Home findNav={findNav}/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    
  </Routes>
  </div>
</div>
   )     
 
}

export default App
