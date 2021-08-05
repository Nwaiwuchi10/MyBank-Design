import React from 'react'
import { FaAngleRight,   FaRegFolderOpen } from 'react-icons/fa';
import './Account.css';


const Account = () => {


    return (
        <div className='Header3'>
            

            <div className='martins'> <h1>Update Account Balances</h1> </div>


       <div className='Account'>
            
          <FaAngleRight className='icons2-1' />
           <div> <h2>SAVINGS ACCOUNT-<span> INDIVIDUAL </span> </h2>
          
           
        <h3>Current Balance</h3> </div>
        <div className='talk'></div>
       
        </div>
        <div className='talk'><h1></h1></div>
        <div className='po'>
        <FaRegFolderOpen className='ebuka'
        /><h8>Open New Account </h8>
        </div>
        
       

        </div>
    )
}

export default Account
