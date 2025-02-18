import React from 'react'
import Navbar from '../components/Navbar'
import Book from "../assets/home/images.png"
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    // const [count, setCount] = useState(10)


    return (


        <div className='home'>

            <Navbar />

            <div className='home-content'>
                <div className='home-content-text'>
                    <h1> Join InterBooks</h1>
                    <p> InterBooks is a platform where you get access to quality books online including PDFs and audio books
                        join a community of online readers, get the latest information on new books of interest.</p>

                    <Link to="../components/Login/Signup.js"> <button className='button i-button'> Click to get started</button> </Link>
                    <p>Already have an account? Sign in</p>
                    <Link to="../components/Login/Signin.js"> <button className='button s-button'> Sign in</button> </Link>



                </div>

                <div className='home-content-image'>
                    <img src={Book} alt="icon" />
                </div>



            </div>


        </div>
    )
}

export default Home