import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='container bg-light navbar-light'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-8 mx-auto'>
                    <h1 className='text-capitalize text-center mb-3 mt-4'>medical laboratory</h1>
                    <ul className='d-flex justify-content-around'>
                        <li className="nav-item ">
                            <Link className="btn btn-outline-dark text-capitalize" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="btn btn-outline-dark text-capitalize" to="/Patient_list">Patient</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar