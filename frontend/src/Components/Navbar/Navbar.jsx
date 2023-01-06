import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Navbar() {

    const [activeItemId, setActiveItemId] = useState('Home')

    function activeItem(element) {

        document.getElementById(activeItemId).className = "navItem"
        element.className = `${element.className + " active "}`
        setActiveItemId(element.id)

    }

    return (
        <>
            <section className="navbar ">

                <Link id='Home' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/Home' >Home</Link>
                <Link id='About' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/About' >About Us</Link>
                <Link id='Admission' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/Admission' >Admission</Link>
                <Link id='Infrastructure' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/Infrastructure' >Infrastructure</Link>
                <Link id='StudentSection' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/StudentSection' >Student Section</Link>
                <Link id='NoticeBoard' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/NoticeBoard' >Notice Board</Link>
                <Link id='SocialMedia' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/SocialMedia' >Social Media</Link>
                <Link id='Login' className='navItem' onClick={(e) => { activeItem(e.target) }} to='/Login' >Login</Link>

            </section>
        </>
    )
}
