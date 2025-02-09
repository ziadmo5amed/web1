import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
function Nav() {
  return (
    <div className="container">

    
    <div className='Nav'>
        <div className='leftSide'>
            <h1>MO</h1>
        </div>
        <div className='rightSide'>
             <ul>
                <li>Contact</li>
                <li>Projects</li>
                <li>Services</li>
             </ul>
        </div>
    </div>
    </div>
  )
}

export default Nav;