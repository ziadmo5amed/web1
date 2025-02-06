import './Nav.css';
import React from 'react';

function Nav() {
  return (
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
  )
}

export default Nav;