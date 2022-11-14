import React from 'react';
import HeaderCSS from './Header.module.css'

export default function Header() {
    return (
        <>
            <div className={HeaderCSS.container}>
                <div className={HeaderCSS.container_fluid}>

                    <div className={HeaderCSS.header_content}>
                        <div className={HeaderCSS.headerMain}>
                            <div className={HeaderCSS.headerText}>
                                <p>Gandhi Gyaan Mandir's</p>
                                <span>Bajaj Science Education Center</span>
                            </div>
                            <div className={HeaderCSS.headerLogo}></div>
                        </div>

                    </div>

                </div>
            </div>
        </>
        
    )

}