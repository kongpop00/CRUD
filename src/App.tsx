import { useEffect, useState ,useContext, createContext} from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from './view/Home'
import Navbar from './componen/Navbar'
import Add from './view/Add'
import Edit from './view/Edit'


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
