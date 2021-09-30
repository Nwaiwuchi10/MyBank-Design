import React from 'react'
import {FaBars  } from 'react-icons/fa'
import { Link } from "react-router-dom";




const Header = () => {
  
  

  const onClick  = () => {
    console.log ('Click')

}
   


    return (
        <div className='parentdiv'>

          
          <div className='Header1'
          style={{backgroundImage:"url(./images/union.jpeg) "}} >
        <div id='circle'>

        </div>
             <nav>
             
               <Link to='#'> <FaBars className='icons' 
               onClick={onClick} /> </Link> 
               <h1>SIGN OUT</h1>
               
             </nav>
              
             
         
          </div>



            
        </div>
    )
}


// CSS in JS


export default Header
