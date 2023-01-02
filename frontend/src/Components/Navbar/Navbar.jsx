import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <section className="navbar ">

                <Link className='navItem' to='/Home' >Home</Link>
                <Link className='navItem' to='/About' >About Us</Link>
                <Link className='navItem' to='/Admission' >Admission</Link>
                <Link className='navItem' to='/Infrastructure' >Infrastructure</Link>
                <Link className='navItem' to='/StudentSection' >Student Section</Link>
                <Link className='navItem' to='/NoticeBoard' >Notice Board</Link>
                <Link className='navItem' to='/SocialMedia' >Social Media</Link>
                <Link className='navItem' to='/Login' >Login</Link>

            </section>
        </>
    )
}
