import React from 'react';
import './Header.css'
import logo from '../../Assets/Media/BSCLogo.png'


export default function Header() {
    return (
        <>

        <section className="header border">

             <img src={logo} alt="logo" />
             <div className="orgName">
                <p>Gandhi Gyaan Mandir's	</p>
                <p>Bajaj Science Education Center</p>
             </div>

        </section>

        </>

    )

}