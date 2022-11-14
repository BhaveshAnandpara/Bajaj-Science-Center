import React from 'react';
import FooterCSS from './Footer.module.css';



export default function Footer() {
    return (
        <>
            <div className={FooterCSS.container}>
                <div className={FooterCSS.content}>
                    <div className={FooterCSS.footerHead}>
                        <div className={FooterCSS.footerText}>
                            <div className={FooterCSS.Inner}>
                                <p>Gandhi Gyaan Mandir's</p>
                                <span>Bajaj Science Education Center</span>
                            </div>

                        </div>
                        <div className={FooterCSS.footerLogo}></div>
                    </div>
                    <div className={FooterCSS.footerBody}>
                        <div className={FooterCSS.footerBody_contents}>
                            <div className={FooterCSS.footerBody_contacts}>
                                <div className={FooterCSS.number}>
                                    <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.5 20.1501V23.9001C26.5015 24.2482 26.4301 24.5928 26.2907 24.9118C26.1512 25.2308 25.9467 25.5171 25.6901 25.7525C25.4336 25.9878 25.1308 26.167 24.801 26.2785C24.4712 26.39 24.1218 26.4315 23.775 26.4001C19.9286 25.9822 16.2338 24.6678 12.9875 22.5626C9.96732 20.6435 7.40671 18.0828 5.48754 15.0626C3.37501 11.8016 2.06034 8.08886 1.65004 4.22512C1.6188 3.87945 1.65988 3.53107 1.77066 3.20215C1.88145 2.87323 2.0595 2.57098 2.2935 2.31465C2.52749 2.05831 2.81229 1.85351 3.12978 1.71327C3.44726 1.57304 3.79046 1.50045 4.13754 1.50012H7.88754C8.49417 1.49415 9.08228 1.70897 9.54224 2.10454C10.0022 2.5001 10.3026 3.04943 10.3875 3.65012C10.5458 4.8502 10.8394 6.02853 11.2625 7.16262C11.4307 7.61003 11.4671 8.09626 11.3674 8.56372C11.2677 9.03118 11.0361 9.46026 10.7 9.80012L9.11254 11.3876C10.892 14.5171 13.4831 17.1082 16.6125 18.8876L18.2 17.3001C18.5399 16.964 18.969 16.7324 19.4364 16.6327C19.9039 16.533 20.3901 16.5694 20.8375 16.7376C21.9716 17.1608 23.15 17.4543 24.35 17.6126C24.9572 17.6983 25.5118 18.0041 25.9082 18.472C26.3046 18.9399 26.5152 19.5371 26.5 20.1501Z" stroke="#DCDDDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </span>
                                    <p>07152-247024, +91 75594-03762</p>
                                </div>
                                <div className={FooterCSS.mail}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z" stroke="#DCDDDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.5 7.5L15 16.25L2.5 7.5" stroke="#DCDDDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p>bajajscience.wda@gmail.com</p>
                                </div>
                            </div>
                            <div className={FooterCSS.address}>

                                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 6.5V26.5L10 21.5L20 26.5L28.75 21.5V1.5L20 6.5L10 1.5L1.25 6.5Z" stroke="#DCDDDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 1.5V21.5" stroke="#DCDDDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20 6.5V26.5" stroke="#DCDDDE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>




                                <p>Gandhi Gyan Mandir's, Bajaj Science Education Center Civil line Wardha, Maharashtra. Pincode : 442001</p>
                            </div>
                            <div className={FooterCSS.open}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="#DCDDDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15 7.5V15L20 17.5" stroke="#DCDDDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>10:00 am - 06:00 pm ( Office Hours )</p>

                            </div>
                        </div>
                        <div className={FooterCSS.footerBody_Bottom}>
                            <p>Copyright © 2021 All Rights Reserved by Pragmizers.</p>
                            <div className={FooterCSS.vector}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}