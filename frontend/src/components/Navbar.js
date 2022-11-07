import React from 'react';
import NavbarCSS from './Navbar.module.css'


export default function Navbar() {
    return (
        <>
            <div className={NavbarCSS.container}>
                <div className={NavbarCSS.container_fluid}>
                    <nav>
                        <div className={NavbarCSS.navContent}>
                            <div className={NavbarCSS.navLink}>
                                <ul>
                                    <li><a className={NavbarCSS.navText} href="#">Home</a></li>
                                    <li><a className={NavbarCSS.navText} href="#">About Us</a></li>
                                    <li><a className={NavbarCSS.navText}href="#">Infrastructure</a></li>
                                    <li><a className={NavbarCSS.navText} href="#">Student Section</a></li>
                                    <li><a className={NavbarCSS.navText} href="#">Notice Board</a></li>
                                    <li><a className={NavbarCSS.navText} href="#">Social Media</a></li>
                                    <li><a className={`${NavbarCSS.navText} ${NavbarCSS.active}`} href="#">Log in</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )

}