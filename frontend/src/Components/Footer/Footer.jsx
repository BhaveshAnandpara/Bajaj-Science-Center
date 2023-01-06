import React from 'react'
import './Footer.css'
import logo from '../../Assets/Media/BSCLogo.png'
import phone from '../../Assets/Icons/phone.svg'
import map from '../../Assets/Icons/map.svg'
import mail from '../../Assets/Icons/mail.svg'
import clock from '../../Assets/Icons/clock.svg'

export default function Footer() {
    return (
        <>
            <section className="footer ">

                <section className="header">
                    <div className="headerContent">
                        <img src={logo} alt="logo" />
                        <div className="orgName">
                            <p>Gandhi Gyaan Mandir's	</p>
                            <p>Bajaj Science Education Center</p>
                        </div>
                    </div>

                </section>

                <div className="footerItems ">

                    <p> <img src={phone} alt="phone" /> <span>07152-247024, +91 75594-03762</span>  </p>
                    <p> <img src={map} alt="map" /> <span>bajajscience.wda@gmail.com</span>  </p>
                    <p> <img src={mail} alt="mail" /> <span>Gandhi Gyan Mandir’s, Bajaj Science Education Center Civil line Wardha, Maharashtra. Pincode : 442001</span>  </p>
                    <p> <img src={clock} alt="clock" /> <span>10:00 am - 06:00 pm ( Office Hours )</span>  </p>

                </div>

                <hr />


                <p style={{ textAlign: 'center', fontWeight: 600, margin: '24px 0px', color: 'var(--gray) !important' }} >Copyright © 2021 All Rights Reserved by Pragmizers.</p>


            </section>
        </>
    )
}
