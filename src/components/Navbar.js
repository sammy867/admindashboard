import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-header'>
                <h1> Capstone 2 </h1>


                <ul className='ul-light'>
                    {/* <ul className={ toggle === false ? 'ul-light' : 'ul-dark'}> */}
                    <li>  Overview  </li>
                    <li>  About Us  </li>
                    <li> Our Product  </li>
                    <li>  Contact Us  </li>
                </ul>
            </div>

            <div className='navbar-signins'>
                <Link to='/Signin'> <button>  Sign In</button> </Link>
                <Link to='/Signup' > <button> Sign Up </button> </Link>
            </div>
        </div>
    )
}

export default Navbar