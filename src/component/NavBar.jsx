import React from 'react'
import "../stylesheets/NavBar.css"

export function Navbar(){
    return(
        <header className='header'>
            <div className='content'>
                <img className='logo' src={require('../img/8255524146_9020af28-1631-4054-b0d6-da48c9dd9a34.png')} alt='logo'/>
                <nav className='nav'>
                    <ul className='list'>
                        <li className='list__li'>Home</li>
                        <li className='list__li'>About</li>
                        <li className='list__li'>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}