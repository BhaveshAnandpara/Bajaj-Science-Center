import React from 'react';
import LoginCSS from './Login.module.css';



export default function Login() {
    return (
        <>
            <div className={LoginCSS.container}>
                <div className={LoginCSS.container_fluid}>

                    <div className={LoginCSS.content}>
                        <form>
                            <input type="text" className={LoginCSS.logInput} placeholder='Username' required />
                            <input type="password" className={LoginCSS.logInput} placeholder='Password' required />
                            <button className={LoginCSS.fluid_btn}>Login</button>
                        </form>
                        
                            
                        
                    </div>

                </div>
            </div>
        </>
        
    )

}