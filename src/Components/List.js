import React from 'react'
import './Nchrys/List.css';
import { FaChartLine, FaHandHolding,  FaIndustry, FaTools, FaUserAlt,  } from 'react-icons/fa'


const List = () => {
    


    return (
        <div className='Header2'>
             
      

    
              <h2 >Accounts</h2>   
            <h2>Loans</h2>  
            <h2>Investments</h2>  
              <h2>Deals</h2>  

              <FaUserAlt className='icons2' />
           <FaHandHolding className='icons3' />
           <FaChartLine className='icons4' />
            <FaTools className='icons5' />
               
        </div>
    )
}



 

export default List
