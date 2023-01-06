import React from 'react';
import './Header.css'
import logo from '../../Assets/Media/BSCLogo.png'
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles'
import particleOptions from '../../Data/particles';
import { useCallback } from 'react';


export default function Header() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>

            <section className="header ">
                <Particles
                    className='particles' init={particlesInit} loaded={particlesLoaded} id="tsparticles-custom" options={particleOptions}
                />

                <div className="headerContent">
                    <img src={logo} alt="logo" />
                    <div className="orgName">
                        <p>Gandhi Gyaan Mandir's	</p>
                        <p>Bajaj Science Education Center</p>
                    </div>

                </div>
            </section>

        </>

    )

}