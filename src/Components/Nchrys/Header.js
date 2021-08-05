import React from 'react'
import {FaBars, FaTimes  } from 'react-icons/fa'

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
               <FaBars className='icons' 
               onClick={onClick} />
               <h1>SIGN OUT</h1>
             </nav>

          </div>



            
        </div>
    )
}


// CSS in JS


export default Header
