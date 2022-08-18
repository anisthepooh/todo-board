import React from 'react'; 
import './Styling/Navbar.css'; 


function Navbar() {
  return (
    <div className='navbar-flex-wrapper'>
        <div className='settings-wrapper'>
            <button>
                <i className='font-variation-settings'>


                </i>
            </button>
        </div>
        <div className='menu-wrapper'>
            <button>
                <span className='material-symbols-sharp'>menu</span>
            </button>
        </div>
        
    </div>
  )
}

export default Navbar